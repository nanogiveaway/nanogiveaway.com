const Discord = ({ className = "" }) => {
  return (
    <iframe
      title="Discord widget for Nano Giveaway server"
      src="https://discord.com/widget?id=626145793413218342&theme=dark"
      className={`${className}`}
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default Discord;
