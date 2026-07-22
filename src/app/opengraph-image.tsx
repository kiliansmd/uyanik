import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#F5F1E9',color:'#1E2724',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:72}}><div style={{fontSize:30,color:'#29443C',display:'flex'}}>{siteConfig.practiceName}</div><div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:72,letterSpacing:-3,lineHeight:1.05,display:'flex'}}>Präzise HNO-Medizin. Persönlich und mit Zeit.</div><div style={{marginTop:28,fontSize:30,color:'#9A7257',display:'flex'}}>Frechen-Königsdorf · Privatversicherte und Selbstzahlende</div></div></div>, size)}
