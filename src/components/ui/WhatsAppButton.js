import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContent } from '../../context/ContentContext';

export const WA_GREEN = '#25D366';

// wa.me link for batch enquiries (Admin → Batch → WhatsApp number / message).
// A 10-digit Indian number gets the 91 country code added.
export const whatsappLink = (number, message) => {
  let digits = String(number || '').replace(/\D/g, '');
  if (digits.length === 10) digits = `91${digits}`;
  if (digits.length < 11) return '';
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};

// Batch enquiry link with the admin's pre-filled message.
export const useBatchWhatsApp = () => {
  const b = useContent('batch');
  if (b.enabled === false) return '';
  return whatsappLink(b.whatsapp, b.whatsappMessage);
};

// One-to-One Mentorship enquiry link (falls back to the batch number).
export const useMentorshipWhatsApp = () => {
  const m = useContent('mentorship');
  const b = useContent('batch');
  if (m.enabled === false) return '';
  return whatsappLink(m.whatsapp || b.whatsapp, m.whatsappMessage);
};

// Counts enquiry clicks in Google Analytics (event "whatsapp_enquiry").
export const trackWhatsApp = (placement) => {
  try {
    window.gtag?.('event', 'whatsapp_enquiry', { placement, page_path: window.location.pathname });
  } catch { /* analytics must never block the click */ }
};

const WhatsAppButton = ({ label, sx, placement = 'page', ...props }) => {
  const href = useBatchWhatsApp();
  const b = useContent('batch');
  if (!href) return null;
  return (
    <Button
      variant="contained"
      size="large"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(placement)}
      startIcon={<WhatsAppIcon />}
      sx={{ background: WA_GREEN, color: '#fff', boxShadow: '0 12px 28px -14px rgba(37,211,102,.9)', '&:hover': { background: '#1EBE5A' }, ...sx }}
      {...props}
    >
      {label || b.whatsappLabel || 'Batch enquiry on WhatsApp'}
    </Button>
  );
};

export default WhatsAppButton;
