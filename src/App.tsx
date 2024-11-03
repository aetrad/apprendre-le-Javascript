import { Box, ChakraProvider, Flex, useDisclosure } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { theme } from './theme';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLesson, setSelectedLesson] = useLocalStorage('selectedLesson', 1);
  const [completedLessons, setCompletedLessons] = useLocalStorage<number[]>('completedLessons', []);

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" bg="gray.900">
        <Sidebar 
          isOpen={isOpen} 
          onClose={onClose}
          selectedLesson={selectedLesson}
          onSelectLesson={setSelectedLesson}
          completedLessons={completedLessons}
        />
        <Box flex="1" p={8}>
          <MainContent 
            selectedLesson={selectedLesson}
            onOpenSidebar={onOpen}
            onComplete={handleLessonComplete}
            isCompleted={completedLessons.includes(selectedLesson)}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}