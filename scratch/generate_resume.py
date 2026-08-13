import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_RIGHT, TA_LEFT

def build_pdf():
    pdf_path = os.path.join(os.getcwd(), 'public', 'resume.pdf')
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    
    # 36 pt margins all around (0.5 inch)
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Colors matching the reference image
    primary_blue = colors.HexColor('#2563eb')  # Vibrant blue for Name and Section Headings
    dark_gray = colors.HexColor('#1e293b')     # Slate-800 for role, main texts
    body_gray = colors.HexColor('#334155')     # Slate-700 for descriptions, bullet items
    light_gray = colors.HexColor('#64748b')    # Slate-500 for dates
    divider_color = colors.HexColor('#cbd5e1') # Light divider color
    
    # Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=32,
        textColor=primary_blue
    )
    
    tagline_style = ParagraphStyle(
        'TaglineStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=body_gray
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        alignment=TA_RIGHT,
        textColor=dark_gray
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=primary_blue
    )
    
    job_title_style = ParagraphStyle(
        'JobTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=dark_gray
    )
    
    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=light_gray
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=body_gray,
        leftIndent=10
    )
    
    project_title_style = ParagraphStyle(
        'ProjectTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=dark_gray
    )
    
    project_desc_style = ParagraphStyle(
        'ProjectDescStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=body_gray
    )
    
    skills_heading_style = ParagraphStyle(
        'SkillsHeadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=primary_blue
    )
    
    skills_body_style = ParagraphStyle(
        'SkillsBodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=body_gray
    )

    story = []
    
    # ----------------------------------------------------
    # HEADER SECTION
    # ----------------------------------------------------
    header_left = [
        Paragraph("Ganesh Bathula", name_style),
        Spacer(1, 8),
        Paragraph("B.Tech CSE student focused on full-stack development, backend systems,<br/>and AI-powered applications", tagline_style)
    ]
    
    # Links with custom markup colors (blue for underlines or links)
    header_right = [
        Paragraph("<a href='mailto:ganeshbathula20@gmail.com'><font color='#2563eb'><u>ganeshbathula20@gmail.com</u></font></a>", contact_style),
        Paragraph("<a href='tel:+917981877584'><font color='#2563eb'><u>+91 7981877584</u></font></a>", contact_style),
        Paragraph("<a href='https://ganeshb-portfolio.vercel.app/'><font color='#2563eb'><u>portfolio</u></font></a>", contact_style),
        Paragraph("<a href='https://github.com/Ganesh5710'><font color='#2563eb'><u>Github.com</u></font></a>", contact_style),
        Paragraph("<a href='https://www.linkedin.com/in/ganeshb57'><font color='#2563eb'><u>linkedin.com</u></font></a>", contact_style),
    ]
    
    # 540 pt total width (612 - 72)
    header_table = Table([[header_left, header_right]], colWidths=[340, 200])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 20))
    
    # Helper to generate section headings with dividers
    def create_section_header(title):
        elements = [
            Spacer(1, 8),
            Paragraph(title, section_title_style),
            Spacer(1, 2),
            HRFlowable(width="100%", thickness=0.8, color=divider_color, spaceAfter=8, spaceBefore=2)
        ]
        return elements

    # ----------------------------------------------------
    # LEFT COLUMN: EXPERIENCE & SKILLS
    # ----------------------------------------------------
    left_flowables = []
    left_flowables.extend(create_section_header("Relevant Experience"))
    
    # Exp 1
    left_flowables.append(Paragraph("Web Developer Intern &middot; <u>Enkonix Software Services</u>", job_title_style))
    left_flowables.append(Paragraph("May 2026 &mdash; Jul 2026", date_style))
    left_flowables.append(Spacer(1, 4))
    left_flowables.append(Paragraph("&bull; Architected and shipped Skillbrix, a full-stack online examination portal, engineering real-time proctoring telemetry over WebSockets to flag candidate integrity signals live.", bullet_style))
    left_flowables.append(Paragraph("&bull; Designed customized automated grading models with negative-marking logic to streamline evaluation for large-scale assessments.", bullet_style))
    left_flowables.append(Paragraph("&bull; Built a high-throughput bulk-import pipeline enabling instructors to validate and upload 2,000+ assessment questions from Excel/CSV templates in seconds.", bullet_style))
    left_flowables.append(Paragraph("&bull; Engineered a premium, fully responsive interface featuring a 3D perspective dashboard with custom mouse-gaze tilt interactions using React , PostgreSQL, and Tailwind CSS.", bullet_style))
    left_flowables.append(Spacer(1, 8))
    
    # Exp 2
    left_flowables.append(Paragraph("Python Development Intern &middot; <u>Infotact Solutions</u>", job_title_style))
    left_flowables.append(Paragraph("Dec 2025 &mdash; Mar 2026", date_style))
    left_flowables.append(Spacer(1, 4))
    left_flowables.append(Paragraph("&bull; Built AI-powered data applications in Python using Pandas and NumPy, integrating LangChain and Ollama to automate analysis workflows.", bullet_style))
    left_flowables.append(Paragraph("&bull; Designed interactive dashboards and reports with Streamlit, Matplotlib, and Seaborn to visualize insights for stakeholders.", bullet_style))
    left_flowables.append(Paragraph("&bull; Automated report generation with ReportLab and deployed applications to Streamlit Community Cloud, managing version control through Git and GitHub.", bullet_style))
    left_flowables.append(Paragraph("&bull; Collaborated with mentors to debug and optimize data pipelines, improving processing speed and the reliability of generated reports.", bullet_style))
    
    left_flowables.extend(create_section_header("Skills"))
    
    left_flowables.append(Paragraph("Languages", skills_heading_style))
    left_flowables.append(Paragraph("Python, JavaScript, HTML, CSS", skills_body_style))
    left_flowables.append(Spacer(1, 6))
    
    left_flowables.append(Paragraph("Frameworks & Libraries", skills_heading_style))
    left_flowables.append(Paragraph("React, Tailwind CSS, Pandas, NumPy", skills_body_style))
    left_flowables.append(Spacer(1, 6))
    
    left_flowables.append(Paragraph("Tools & Platforms", skills_heading_style))
    left_flowables.append(Paragraph("Git, GitHub, VS Code, PostgreSQL, Supabase, Firebase, Vercel, Railway", skills_body_style))

    # ----------------------------------------------------
    # RIGHT COLUMN: PROJECTS, EDUCATION, INTERESTS
    # ----------------------------------------------------
    right_flowables = []
    right_flowables.extend(create_section_header("Projects"))
    
    # Project 1
    right_flowables.append(Paragraph("Skillbrix &mdash; Online Exam Portal", project_title_style))
    right_flowables.append(Spacer(1, 2))
    right_flowables.append(Paragraph("Full-stack exam platform with automated grading, negative marking, and real-time evaluations at scale &mdash; including a live proctoring center streaming WebSocket telemetry and a bulk-import pipeline validating 2,000+ questions from Excel/CSV in seconds. Built with React, PostgreSQL & Tailwind CSS.", project_desc_style))
    right_flowables.append(Spacer(1, 3))
    right_flowables.append(Paragraph("<a href='https://github.com/Ganesh5710/Skillbrix'><font color='#2563eb'><u>GitHub</u></font></a> - <a href='https://skillbrix-exam.vercel.app/'><font color='#2563eb'><u>LiveDemo</u></font></a>", date_style))
    right_flowables.append(Spacer(1, 8))
    
    # Project 2
    right_flowables.append(Paragraph("StateBot Pro &mdash; CSV Data Analyst", project_title_style))
    right_flowables.append(Spacer(1, 2))
    right_flowables.append(Paragraph("AI-powered chatbot that turns raw CSV data into an interactive conversation, using state-based conversation management and a scalable Python backend for fast, automated responses.", project_desc_style))
    right_flowables.append(Spacer(1, 3))
    right_flowables.append(Paragraph("<a href='https://github.com/Ganesh5710/StateBotPro'><font color='#2563eb'><u>GitHub</u></font></a> - <a href='https://statbot-pro.streamlit.app/'><font color='#2563eb'><u>LiveDemo</u></font></a>", date_style))
    
    right_flowables.extend(create_section_header("Education"))
    right_flowables.append(Paragraph("Aditya College of Engineering", project_title_style))
    right_flowables.append(Paragraph("B.Tech in Computer Science Engineering", skills_body_style))
    right_flowables.append(Paragraph("2023 &mdash; 2027 &middot; CGPA: 73.7%", date_style))
    
    right_flowables.extend(create_section_header("Interests"))
    right_flowables.append(Paragraph("Website Designing, UI/UX & Visual Design, Building AI-Powered Side Projects, Exploring New Frameworks & Dev Tools, Open Source, Competitive Problem Solving", skills_body_style))

    # ----------------------------------------------------
    # TWO COLUMN MASTER TABLE
    # ----------------------------------------------------
    # Widths: Left column = 320, Right column = 200, Gap = 20
    master_table = Table([[left_flowables, '', right_flowables]], colWidths=[320, 20, 200])
    master_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(master_table)
    
    doc.build(story)
    print(f"PDF generated successfully at {pdf_path}")

if __name__ == '__main__':
    build_pdf()
