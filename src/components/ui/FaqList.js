import React, { useState } from 'react';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Reveal } from './Motion';

// Animated accordion for { q, a } items; one open at a time.
const FaqList = ({ items }) => {
  const [open, setOpen] = useState(0);
  return (
    <Stack gap={1.5}>
      {items.map((f, i) => {
        const active = open === i;
        return (
          <Reveal key={`${f.q}-${i}`} delay={Math.min(i * 0.03, 0.2)}>
            <Box sx={{ borderRadius: '20px', bgcolor: 'background.paper', border: 1, borderColor: active ? 'primary.main' : 'divider', transition: 'border-color .2s', overflow: 'hidden' }}>
              <ButtonBase onClick={() => setOpen(active ? -1 : i)} aria-expanded={active} sx={{ width: '100%', justifyContent: 'space-between', textAlign: 'left', gap: 2, px: { xs: 2, md: 3 }, py: 2.2 }}>
                <Typography sx={{ fontWeight: 700, color: active ? 'primary.main' : 'text.primary' }}>{f.q}</Typography>
                <motion.span animate={{ rotate: active ? 45 : 0 }} style={{ display: 'flex', flexShrink: 0 }}>
                  <AddRoundedIcon color={active ? 'primary' : 'action'} />
                </motion.span>
              </ButtonBase>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <Typography color="text.secondary" sx={{ px: { xs: 2, md: 3 }, pb: 2.5 }}>{f.a}</Typography>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Reveal>
        );
      })}
    </Stack>
  );
};

export default FaqList;
