import jsPDF from 'jspdf';
import i18n from '../i18n';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  techs: string[];
}

interface SoftSkill {
  name: string;
  icon: string;
}

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 18;
const CONTENT_W = PAGE_W - MARGIN * 2;

/** Converte fontSize (pt) para altura de linha em mm com espaçamento */
const lineH = (fontSize: number, factor = 1.4) => fontSize * 0.3528 * factor;

function splitLines(pdf: jsPDF, text: string, maxWidth: number): string[] {
  return pdf.splitTextToSize(text, maxWidth);
}

function checkPageBreak(pdf: jsPDF, y: number, neededHeight: number): number {
  if (y + neededHeight > PAGE_H - MARGIN) {
    pdf.addPage();
    return MARGIN + 10;
  }
  return y;
}

export function useGeneratePDF() {
  const generatePDF = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tr = (key: string, opts?: Record<string, any>): any =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (i18n.t as any)(key, opts);

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // ── Helpers ──────────────────────────────────────────────────────────────
    const drawHRule = (y: number, color = '#cccccc') => {
      pdf.setDrawColor(color);
      pdf.setLineWidth(0.3);
      pdf.line(MARGIN, y, PAGE_W - MARGIN, y);
    };

    const sectionTitle = (label: string, y: number): number => {
      y = checkPageBreak(pdf, y, 14);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor('#111111');
      pdf.text(label.toUpperCase(), MARGIN, y);
      y += 1.5;
      drawHRule(y, '#333333');
      return y + 5;
    };

    // ── HEADER ────────────────────────────────────────────────────────────────
    const HEADER_H = 42;
    pdf.setFillColor('#111111');
    pdf.rect(0, 0, PAGE_W, HEADER_H, 'F');

    // Nome
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(22);
    pdf.setTextColor('#ffffff');
    pdf.text('Tácio Wurdig', MARGIN, 16);

    // Cargo
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor('#cccccc');
    pdf.text(tr('hero.role') as string, MARGIN, 25);

    // Contatos
    pdf.setFontSize(9);
    pdf.setTextColor('#aaaaaa');
    const contacts = [
      tr('hero.location') as string,
      'linkedin.com/in/tatowurdig',
      'github.com/devtatowurdig',
    ];
    pdf.text(contacts.join('   •   '), MARGIN, 33);

    let y = HEADER_H + 10;

    // ── ABOUT ─────────────────────────────────────────────────────────────────
    y = sectionTitle(tr('about.title') as string, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9.5);
    pdf.setTextColor('#444444');
    const aboutLines = splitLines(pdf, tr('about.description') as string, CONTENT_W);
    const aboutLineH = lineH(9.5);
    y = checkPageBreak(pdf, y, aboutLines.length * aboutLineH);
    pdf.text(aboutLines, MARGIN, y);
    y += aboutLines.length * aboutLineH + 8;

    // ── EXPERIENCE ────────────────────────────────────────────────────────────
    y = sectionTitle(tr('experience.title') as string, y);
    const expItems = tr('experience.items', { returnObjects: true }) as ExperienceItem[];

    expItems.forEach((item) => {
      // Estimar altura total do bloco para decidir page break
      const descLineCount = splitLines(pdf, item.description, CONTENT_W).length;
      const blockH = lineH(10) + lineH(9) + descLineCount * lineH(9) + lineH(8) + 10;
      y = checkPageBreak(pdf, y, blockH);

      // Cargo
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor('#111111');
      pdf.text(item.role, MARGIN, y);

      // Período (mesmo y, alinhado à direita)
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor('#666666');
      const periodW = pdf.getTextWidth(item.period);
      pdf.text(item.period, PAGE_W - MARGIN - periodW, y);
      y += lineH(10);

      // Empresa
      pdf.setFont('helvetica', 'bolditalic');
      pdf.setFontSize(9);
      pdf.setTextColor('#555555');
      pdf.text(item.company, MARGIN, y);
      y += lineH(9) + 1;

      // Descrição
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor('#333333');
      const descLines = splitLines(pdf, item.description, CONTENT_W);
      pdf.text(descLines, MARGIN, y);
      y += descLines.length * lineH(9) + 2;

      // Tecnologias
      if (item.techs?.length) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor('#666666');
        pdf.text('Tecnologias: ' + item.techs.join(' • '), MARGIN, y);
        y += lineH(8) + 4;
      }

      drawHRule(y, '#dddddd');
      y += 6;
    });

    // ── EDUCATION ─────────────────────────────────────────────────────────────
    y = sectionTitle(tr('education.title') as string, y);
    const eduItems = tr('education.items', { returnObjects: true }) as EducationItem[];

    eduItems.forEach((item) => {
      const descLineCount = splitLines(pdf, item.description, CONTENT_W).length;
      const blockH = lineH(10) + lineH(9) + descLineCount * lineH(9) + lineH(8) + 10;
      y = checkPageBreak(pdf, y, blockH);

      // Grau
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor('#111111');
      pdf.text(item.degree, MARGIN, y);

      // Período
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor('#666666');
      const periodW = pdf.getTextWidth(item.period);
      pdf.text(item.period, PAGE_W - MARGIN - periodW, y);
      y += lineH(10);

      // Instituição
      pdf.setFont('helvetica', 'bolditalic');
      pdf.setFontSize(9);
      pdf.setTextColor('#555555');
      pdf.text(item.institution, MARGIN, y);
      y += lineH(9) + 1;

      // Descrição
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor('#333333');
      const descLines = splitLines(pdf, item.description, CONTENT_W);
      pdf.text(descLines, MARGIN, y);
      y += descLines.length * lineH(9) + 2;

      // Tecnologias
      if (item.techs?.length) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor('#666666');
        pdf.text('Tecnologias: ' + item.techs.join(' • '), MARGIN, y);
        y += lineH(8) + 4;
      }

      drawHRule(y, '#dddddd');
      y += 6;
    });

    // ── SOFT SKILLS ───────────────────────────────────────────────────────────
    y = sectionTitle(tr('softskills.title') as string, y);
    const skills = tr('softskills.items', { returnObjects: true }) as SoftSkill[];
    const skillNames = skills.map((s) => s.name);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor('#333333');

    const chunkSize = 4;
    const colW = CONTENT_W / chunkSize;
    for (let i = 0; i < skillNames.length; i += chunkSize) {
      const row = skillNames.slice(i, i + chunkSize);
      y = checkPageBreak(pdf, y, lineH(9) + 2);
      row.forEach((name, colIdx) => {
        pdf.text(`• ${name}`, MARGIN + colIdx * colW, y);
      });
      y += lineH(9) + 2;
    }

    // ── FOOTER ────────────────────────────────────────────────────────────────
    pdf.setFont('helvetica', 'italic');
    pdf.setFontSize(8);
    pdf.setTextColor('#aaaaaa');
    pdf.text('Tácio Wurdig – Currículo gerado automaticamente', PAGE_W / 2, PAGE_H - 8, {
      align: 'center',
    });

    pdf.save('curriculo-tacio-wurdig.pdf');
  };

  return { generatePDF };
}

