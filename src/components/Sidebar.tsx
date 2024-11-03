import {
  Box,
  VStack,
  Text,
  Link,
  Icon,
  Heading,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BookOpen, Code2, Coffee, FileCode2, Terminal, Trophy, CheckCircle2 } from 'lucide-react';
import { lessons } from '../data/lessons';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  selectedLesson: number;
  onSelectLesson: (id: number) => void;
  completedLessons: number[];
}

const icons = [BookOpen, Code2, Terminal, FileCode2, Coffee];

export function Sidebar({ isOpen, onClose, selectedLesson, onSelectLesson, completedLessons }: SidebarProps) {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const SidebarContent = () => (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading size="md" display="flex" alignItems="center" gap={2}>
          <Icon as={Trophy} />
          30 Jours de JavaScript
        </Heading>
        <Text mt={2} color="gray.400" fontSize="sm">
          Maîtrisez JavaScript en 30 jours
        </Text>
        <Text mt={1} color="blue.300" fontSize="sm">
          {completedLessons.length} / 30 leçons complétées
        </Text>
      </Box>

      <VStack spacing={2} align="stretch">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            py={2}
            px={4}
            borderRadius="md"
            bg={selectedLesson === lesson.id ? 'blue.900' : 'transparent'}
            color={selectedLesson === lesson.id ? 'blue.300' : 'gray.300'}
            _hover={{
              bg: 'gray.700',
              textDecoration: 'none',
              color: 'white',
            }}
            display="flex"
            alignItems="center"
            gap={3}
            onClick={() => {
              onSelectLesson(lesson.id);
              if (isMobile && onClose) onClose();
            }}
          >
            <Icon as={icons[(lesson.id - 1) % icons.length]} />
            <Text fontSize="sm">{lesson.title}</Text>
            {completedLessons.includes(lesson.id) && (
              <Icon as={CheckCircle2} color="green.400" ml="auto" />
            )}
          </Link>
        ))}
      </VStack>
    </VStack>
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen || false} placement="left" onClose={onClose || (() => {})}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" p={6}>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box
      w="300px"
      h="100vh"
      bg="gray.800"
      borderRight="1px"
      borderColor="gray.700"
      p={6}
      position="sticky"
      top={0}
      overflowY="auto"
    >
      <SidebarContent />
    </Box>
  );
}