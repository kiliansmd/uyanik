'use client';
import { useId, useState } from 'react';
import type { FaqItem } from '@/types/content';
export function FAQAccordion({ items }: { items: FaqItem[] }) {const [open, setOpen] = useState(0); const baseId = useId(); return <div className="faq-list">{items.map((item,index)=>{const panelId=`${baseId}-panel-${index}`;const buttonId=`${baseId}-button-${index}`;const isOpen=open===index;return <div className="faq-item" key={item.question}><h2><button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={()=>setOpen(isOpen?-1:index)}>{item.question}</button></h2><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{item.answer}</p></div></div>})}</div>}
