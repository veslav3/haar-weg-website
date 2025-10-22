export const whatsappConfig = {
  number: "31687405787",
  message: "Hallo, ik wil graag een afspraak maken bij Jacqueline Official Hairstyle, wanneer bent u beschikbaar?"
}

export const getWhatsAppUrl = () => {
  return `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(whatsappConfig.message)}`
}
