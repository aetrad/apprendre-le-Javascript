import {
  Box,
  Button,
  Code,
  Heading,
  IconButton,
  Text,
  VStack,
  useToast,
  HStack,
} from '@chakra-ui/react';
import { ExternalLink, Menu, CheckCircle } from 'lucide-react';
import { lessons } from '../data/lessons';

interface MainContentProps {
  selectedLesson: number;
  onOpenSidebar: () => void;
  onComplete: (lessonId: number) => void;
  isCompleted: boolean;
}

export function MainContent({ selectedLesson, onOpenSidebar, onComplete, isCompleted }: MainContentProps) {
  const toast = useToast();
  const lesson = lessons.find((l) => l.id === selectedLesson) || lessons[0];

  const handleStartCoding = () => {
    const url = `https://stackblitz.com/fork/javascript?file=index.js&title=Jour${lesson.id}-${lesson.title.replace(/\s+/g, '-')}`;
    window.open(url, '_blank');
    
    toast({
      title: "Éditeur de code ouvert",
      description: "Vous pouvez maintenant pratiquer les concepts de cette leçon !",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
      variant: "solid",
    });
  };

  const handleComplete = () => {
    onComplete(lesson.id);
    toast({
      title: "Leçon terminée !",
      description: "Votre progression a été sauvegardée",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <VStack spacing={8} align="stretch">
      <Box display="flex" alignItems="center" gap={4}>
        <IconButton
          aria-label="Menu"
          icon={<Menu />}
          display={{ base: 'flex', lg: 'none' }}
          onClick={onOpenSidebar}
          variant="outline"
          colorScheme="whiteAlpha"
        />
        <Heading size="lg">Jour {lesson.id}: {lesson.title}</Heading>
      </Box>

      <Box>
        <Text whiteSpace="pre-line" color="gray.300" mb={6}>
          {lesson.content}
        </Text>

        {lesson.code && (
          <Box bg="gray.800" p={4} borderRadius="md" mb={4} borderWidth={1} borderColor="gray.700">
            <Code display="block" whiteSpace="pre" bg="transparent" color="blue.300">
              {lesson.code}
            </Code>
          </Box>
        )}

        <HStack spacing={4}>
          <Button
            colorScheme="blue"
            size="md"
            rightIcon={<ExternalLink size={16} />}
            onClick={handleStartCoding}
            _hover={{ bg: 'blue.600' }}
          >
            Commencer à Coder
          </Button>

          <Button
            colorScheme={isCompleted ? "green" : "gray"}
            size="md"
            rightIcon={<CheckCircle size={16} />}
            onClick={handleComplete}
            variant={isCompleted ? "solid" : "outline"}
          >
            {isCompleted ? "Terminé !" : "Marquer comme terminé"}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}