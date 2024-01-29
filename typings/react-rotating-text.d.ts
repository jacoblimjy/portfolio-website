declare module "react-rotating-text" {
  interface ReactRotatingTextProps {
    items: string[];
    pause?: number;
    typingInterval?: number;
    deletingInterval?: number;
    emptyPause?: number;
    cursor?: boolean;
    color?: string;
    // You can continue adding more props as needed
  }

  const ReactRotatingText: React.FC<ReactRotatingTextProps>;
  export default ReactRotatingText;
}
