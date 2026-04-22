import whatsappLogo from "@/assets/whatsapp-logo.webp";

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon = ({ className = "h-8 w-8" }: WhatsAppIconProps) => {
  return (
    <img
      src={whatsappLogo}
      alt="WhatsApp"
      className={className}
      loading="lazy"
      decoding="async"
      width={96}
      height={96}
    />
  );
};

export default WhatsAppIcon;
