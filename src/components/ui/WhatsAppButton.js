import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContent } from '../../context/ContentContext';

// wa.me link for batch enquiries (Admin → Batch → WhatsApp number / message).
// A 10-digit Indian number gets the 91 country code added.
export const whatsappLink = (number, message) => {
  let digits = String(number || '').replace(/\D/g, '');
  if (digits.length === 10) digits = `91${digits}`;
  if (digits.length < 11) return '';
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};

export const useBatchWhatsApp = () => {
  const b = useContent('batch');
  return whatsappLink(b.whatsapp, b.whatsappMessage);
};

const WhatsAppButton = ({ label, sx, ...props }) => {
  const href = useBatchWhatsApp();
  const b = useContent('batch');
  if (!href) return null;
  return (
    <Button
      variant="contained"
      size="large"
      href={href}
      target="_blank"
      rel="noopener"
      startIcon={<WhatsAppIcon />}
      sx={{ background: '#25D366', color: '#fff', boxShadow: '0 12px 28px -14px rgba(37,211,102,.9)', '&:hover': { background: '#1EBE5A' }, ...sx }}
      {...props}
    >
      {label || b.whatsappLabel || 'Batch enquiry on WhatsApp'}
    </Button>
  );
};

export default WhatsAppButton;
