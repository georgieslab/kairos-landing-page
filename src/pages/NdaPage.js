// src/pages/NdaPage.js
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styling components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  position: relative;
  animation: fadeIn 2s ease-in-out, colorShift 5s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes colorShift {
    0%, 100% {
      background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
      -webkit-background-clip: text;
    }
    50% {
      background: linear-gradient(135deg, #10B068 0%, #0D7B3E 100%);
      -webkit-background-clip: text;
    }
  }
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
  margin: 0 auto 15px;
  display: block;
`;

const LogoSubtitle = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const DateDisplay = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const DocumentId = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Watermark = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 8rem;
  color: rgba(226, 232, 240, 0.3);
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
`;

const NdaContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  color: ${({ theme }) => theme.colors.black};
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #111827;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #E5E7EB;
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin: 35px 0 15px;
  color: #1F2937;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  color: #4B5563;
`;

const List = styled.ul`
  margin: 15px 0 20px 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  color: #4B5563;
`;

const SignatureSection = styled.div`
  margin-top: 50px;
  padding-top: 40px;
  border-top: 1px solid #E5E7EB;
`;

const SignatureBox = styled.div`
  margin-top: 20px;
  padding: 25px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background-color: #FAFAFA;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #10B068;
    box-shadow: 0 0 0 3px rgba(16, 176, 104, 0.1);
  }
`;

const SignatureCanvas = styled.canvas`
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  display: block;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  touch-action: none;
`;

const SignatureInstructions = styled.div`
  font-size: 0.9rem;
  color: #6B7280;
  margin-top: 5px;
  margin-bottom: 10px;
  font-style: italic;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const ClearButton = styled(Button)`
  background: #F87171;
  color: white;

  &:hover {
    background: #EF4444;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 1.1rem;
  width: 100%;
  background: #10B068;
  color: white;

  &:hover {
    background: #0D8D54;
  }

  &:disabled {
    background: #A7F3D0;
    cursor: not-allowed;
  }
`;

const ThankYouOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 123, 62, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s, visibility 0.5s;
`;

const ThankYouPopup = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20px')});
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: transform 0.5s, opacity 0.5s;
  transition-delay: ${({ isVisible }) => (isVisible ? '0.2s' : '0')};
`;

const ThankYouCheckmark = styled.div`
  width: 80px;
  height: 80px;
  background-color: #10B068;
  border-radius: 50%;
  color: white;
  font-size: 45px;
  line-height: 80px;
  margin: 0 auto 20px;
  position: relative;
  animation: scaleIn 0.6s ease-out forwards;

  @keyframes scaleIn {
    0% { transform: scale(0); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const ThankYouHeading = styled.h2`
  color: #10B068;
  font-size: 28px;
  margin-bottom: 15px;
`;

const ThankYouText = styled.p`
  color: #4B5563;
  margin-bottom: 12px;
  font-size: 16px;
`;

const LoadingBar = styled.div`
  height: 6px;
  background-color: #E6E6E6;
  border-radius: 3px;
  margin-top: 25px;
  overflow: hidden;
`;

const LoadingProgress = styled.div`
  height: 100%;
  width: ${({ isVisible }) => (isVisible ? '100%' : '0%')};
  background-color: #10B068;
  border-radius: 3px;
  transition: width 3.5s linear;
`;

const Contact = styled.div`
  margin-top: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 30px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Main component
function NdaPage({ setAuthenticated }) {
  // Use a function to get today's date string to avoid Date constructor issues
  function getTodayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const [formData, setFormData] = useState({
    recipientName: '',
    companyName: '',
    recipientTitle: '',
    recipientEmail: '',
    signingDate: getTodayString()
  });
  
  const [signature, setSignature] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up canvas context
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = 150;
      
      // Set canvas styling
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#000';
      
      // Handle window resize
      const handleResize = () => {
        const oldData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = canvas.offsetWidth;
        ctx.putImageData(oldData, 0, 0);
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#000';
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    if (e.type.includes('touch')) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e) => {
    const coords = getCoordinates(e);
    setIsDrawing(true);
    setLastX(coords.x);
    setLastY(coords.y);
    
    // Start a new path
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    
    e.preventDefault();
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    setLastX(coords.x);
    setLastY(coords.y);
    
    e.preventDefault();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      
      // Save signature as data URL
      const canvas = canvasRef.current;
      setSignature(canvas.toDataURL());
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignature('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.recipientName || !formData.recipientEmail || !signature) {
      alert('Please fill in all required fields and provide a signature.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Store the authenticated state
      sessionStorage.setItem('hasSignedNDA', 'true');
      if (setAuthenticated) {
        setAuthenticated(true);
      }
      
      // Show thank you overlay
      setShowThankYou(true);
      
      // Redirect after animation completes
      setTimeout(() => {
        navigate('/journal');
      }, 4000);
    }, 1000);
  };

  return (
    <PageContainer>
      <Watermark>CONFIDENTIAL</Watermark>
      
      <Container>
        <Header>
          <DocumentId>Document ID: KAIROS-NDA-2025</DocumentId>
          <LogoImage src="/static/icons/kairos-logo.svg" alt="Καιρός" />
          <LogoSubtitle>AI-Enhanced Journaling Experience</LogoSubtitle>
          <DateDisplay>Last Updated: March 23, 2025</DateDisplay>
        </Header>
        
        <NdaContent>
          <Heading>Non-Disclosure Agreement</Heading>
          
          <Paragraph>
            This Non-Disclosure Agreement (the "Agreement") is made and entered into as of the date of the latest signature below (the "Effective Date") between:
          </Paragraph>
          
          <Paragraph>
            <strong>Καιρός</strong>, a company established under the laws of Austria, with its principal place of business at Neustiftgasse 21/1/9, Böheimkirchen, 3107, Austria (hereinafter referred to as the "<strong>Company</strong>"), represented by Giorgi Akopashvili, and
          </Paragraph>
          
          <Paragraph>
            The undersigned individual or entity, including its representatives and affiliates (hereinafter referred to as the "<strong>Recipient</strong>").
          </Paragraph>
          
          <Paragraph>
            The Company and Recipient shall be collectively referred to as the "Parties" and individually as a "Party".
          </Paragraph>
          
          <SubHeading>1. Purpose</SubHeading>
          <Paragraph>
            The Parties wish to explore a potential business relationship related to the Company's AI-enhanced journaling platform (the "Purpose"). In connection with the Purpose, the Recipient may have access to certain proprietary and confidential information of the Company.
          </Paragraph>
          
          <SubHeading>2. Definition of Confidential Information</SubHeading>
          <Paragraph>
            For the purposes of this Agreement, "<strong>Confidential Information</strong>" means any and all information disclosed by the Company to the Recipient, whether orally, in writing, electronically, or by any other means, that:
          </Paragraph>
          
          <List>
            <ListItem>Is designated as confidential or proprietary;</ListItem>
            <ListItem>By its nature would reasonably be considered confidential; or</ListItem>
            <ListItem>Is specifically identified below as Confidential Information.</ListItem>
          </List>
          
          <Paragraph>Confidential Information includes, but is not limited to:</Paragraph>
          
          <List>
            <ListItem>Technical information about the Company's NFC-enabled journaling system and AI analysis capabilities;</ListItem>
            <ListItem>The structure, organization, and code of any software or algorithms used in the Company's products;</ListItem>
            <ListItem>Business models, pricing strategies, and financial projections;</ListItem>
            <ListItem>Marketing plans, research, and strategic initiatives;</ListItem>
            <ListItem>User experience designs, product development roadmaps, and future feature plans;</ListItem>
            <ListItem>AI and machine learning methodologies and implementations;</ListItem>
            <ListItem>Customer data, analytics, and insights models;</ListItem>
            <ListItem>Partnership opportunities and negotiation strategies;</ListItem>
            <ListItem>Unpublished patent applications, trade secrets, and know-how; and</ListItem>
            <ListItem>Any other information that provides the Company with a competitive advantage.</ListItem>
          </List>
          
          <SignatureSection>
            <SubHeading>Agreement Acknowledgment</SubHeading>
            <Paragraph>
              By signing below, the Recipient acknowledges understanding and agreement to the terms outlined above.
            </Paragraph>
            
            <form onSubmit={handleSubmit}>
              <SignatureBox>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="recipientName">Full Name:</Label>
                    <Input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="companyName">Company/Organization:</Label>
                    <Input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="recipientTitle">Title/Position:</Label>
                    <Input
                      type="text"
                      id="recipientTitle"
                      name="recipientTitle"
                      value={formData.recipientTitle}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="recipientEmail">Email Address:</Label>
                    <Input
                      type="email"
                      id="recipientEmail"
                      name="recipientEmail"
                      value={formData.recipientEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <Label htmlFor="signingDate">Date:</Label>
                <Input
                  type="date"
                  id="signingDate"
                  name="signingDate"
                  value={formData.signingDate}
                  onChange={handleInputChange}
                  required
                />
                
                <Label>Signature:</Label>
                <SignatureInstructions>
                  Draw your signature below using your mouse or finger on touch devices
                </SignatureInstructions>
                <SignatureCanvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
                <ButtonGroup>
                  <ClearButton type="button" onClick={clearSignature}>
                    Clear Signature
                  </ClearButton>
                </ButtonGroup>
              </SignatureBox>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Signed Agreement'}
              </SubmitButton>
            </form>
          </SignatureSection>
        </NdaContent>
        
        <Contact>
          For any questions regarding this agreement, please contact:<br />
          <strong>giorgi@kairos.startup</strong>
        </Contact>
        
        <Footer>
          Καιρός NDA | Confidential | Page 1 of 1
        </Footer>
      </Container>
      
      <ThankYouOverlay isVisible={showThankYou}>
        <ThankYouPopup isVisible={showThankYou}>
          <ThankYouCheckmark>✓</ThankYouCheckmark>
          <ThankYouHeading>Thank You!</ThankYouHeading>
          <ThankYouText>Your NDA has been successfully submitted.</ThankYouText>
          <ThankYouText>You'll be redirected to our confidential information package in a moment...</ThankYouText>
          <LoadingBar>
            <LoadingProgress isVisible={showThankYou} />
          </LoadingBar>
        </ThankYouPopup>
      </ThankYouOverlay>
    </PageContainer>
  );
}

export default NdaPage;