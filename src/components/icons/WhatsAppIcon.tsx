import whatsappLogo from "@/assets/whatsapp-logo.png";

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon = ({ className = "h-6 w-6" }: WhatsAppIconProps) => {
  return (
    <img
      src={whatsappLogo}
      alt="WhatsApp"
      className={className}
      loading="lazy"
    />
  );
};

export default WhatsAppIcon;
