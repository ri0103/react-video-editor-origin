'use client'; // Crucial for hooks and client-side logic

import { useEffect } from 'react';
import Editor from '@/features/editor'; // Assuming Editor is default export from features/editor/index.ts or features/editor/editor.tsx
import useDataState from '@/features/editor/store/use-data-state';
import { getCompactFontData } from '@/features/editor/utils/fonts';
import { FONTS } from '@/features/editor/data/fonts';

export default function EditorPage() { // Renamed from App to avoid confusion
  const { setCompactFonts, setFonts } = useDataState();

  useEffect(() => {
    // Ensure FONTS and getCompactFontData are correctly imported and work
    if (FONTS && typeof getCompactFontData === 'function' && typeof setCompactFonts === 'function' && typeof setFonts === 'function') {
      setCompactFonts(getCompactFontData(FONTS));
      setFonts(FONTS);
    } else {
      console.error('Font initialization data or functions are not available.');
    }
  }, [setCompactFonts, setFonts]); // Added dependencies to useEffect

  return <Editor />;
}
