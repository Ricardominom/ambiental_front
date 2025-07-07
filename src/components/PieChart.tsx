import React from 'react';

interface PieChartProps {
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  size?: number;
  centerText?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, size = 80, centerText }) => {
  const radius = size / 2 - 4; // Más espacio para el borde
  const centerX = size / 2;
  const centerY = size / 2;
  
  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate angles for each segment
  let currentAngle = -90; // Start from top
  const segments = data.map(item => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle,
      angle
    };
  });
  
  // Function to convert angle to coordinates
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };
  
  // Function to create arc path
  const createArcPath = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };
  
  return (
    <div className="relative flex items-center justify-center">
      <svg 
        width={size} 
        height={size} 
        className="transform rotate-0 drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Fondo del círculo */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 2}
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1"
          className="drop-shadow-sm"
        />
        
        {/* Segmentos del gráfico */}
        {segments.map((segment, index) => (
          <g key={index}>
            <path
              d={createArcPath(centerX, centerY, radius, segment.startAngle, segment.endAngle)}
              fill={segment.color}
              stroke="white"
              strokeWidth="2"
              className="transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
              }}
            />
          </g>
        ))}
        
        {/* Círculo central más grande y con mejor diseño */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.45}
          fill="white"
          stroke="#f3f4f6"
          strokeWidth="2"
          className="drop-shadow-md"
        />
        
        {/* Texto central con mejor tipografía */}
        {centerText && (
          <text
            x={centerX}
            y={centerY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs font-bold fill-gray-800"
            style={{ 
              fontSize: `${size * 0.12}px`,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            {centerText}
          </text>
        )}
        
        {/* Borde exterior sutil */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius + 1}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
      
      {/* Indicadores de colores mejorados */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center space-x-1">
              <div 
                className="w-2 h-2 rounded-full shadow-sm"
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="text-xs font-medium text-gray-600">
                {segment.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;