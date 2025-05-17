
import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface VoiceChatProps {
  onClose?: () => void;
}

const VoiceChat: React.FC<VoiceChatProps> = ({ onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const { toast } = useToast();

  const handleMicClick = () => {
    if (!isListening) {
      // Start listening
      setIsListening(true);
      
      // This is where we would integrate with Web Speech API
      // For now, we'll simulate with a timeout
      toast({
        title: "Listening...",
        description: "Ask a marketing question and I'll help you!",
      });

      // Simulate response after 3 seconds
      setTimeout(() => {
        setIsListening(false);
        setTranscript("This is where your question transcript would appear. In a real implementation, we would connect to a speech recognition API and process your marketing questions.");
        
        toast({
          title: "Thanks for your question!",
          description: "UDDA would process your marketing query here and provide strategic advice.",
        });
      }, 3000);
    } else {
      // Stop listening
      setIsListening(false);
      toast({
        title: "Stopped listening",
        description: "Tap the microphone again to ask a question.",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 font-rubik">
      <div className="bg-white rounded-xl w-full max-w-md p-6 mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-udda-text">Ask UDDA</h3>
          <Button 
            variant="ghost" 
            className="rounded-full h-8 w-8 p-0" 
            onClick={onClose}
          >
            ✕
          </Button>
        </div>
        
        <div className="mb-6 text-center">
          <Button
            onClick={handleMicClick}
            className={`rounded-full h-24 w-24 flex items-center justify-center transition-all mic-button-hover ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90'
            }`}
          >
            <Mic 
              className={`h-10 w-10 ${isListening ? 'animate-pulse' : ''}`}
            />
          </Button>
          <p className="mt-4 text-udda-lightGray text-sm">
            {isListening ? 'Listening...' : 'Tap to speak'}
          </p>
        </div>
        
        {transcript && (
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-udda-text">
            <p className="text-udda-lightGray mb-1">Your question:</p>
            <p>{transcript}</p>
          </div>
        )}
        
        <p className="text-xs text-center mt-6 text-udda-lightGray">
          UDDA uses voice recognition to understand your marketing questions and provide expert strategy advice.
        </p>
      </div>
    </div>
  );
};

export default VoiceChat;
