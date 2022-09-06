const Discord = ({ className = "" }) => {
  return (
    <iframe
      src="https://discord.com/widget?id=626145793413218342&theme=dark"
      className={`${className}`}
      allowTransparency={true}
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default Discord;
