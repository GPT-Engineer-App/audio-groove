import { Container, VStack, Text, IconButton, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentSong, setCurrentSong] = useState("Song Title");
  const [albumArt, setAlbumArt] = useState("path/to/album-art.jpg");

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Music Player</Text>
        <Box boxSize="200px" borderRadius="full" overflow="hidden" mb={4} animation={isPlaying ? "spin 4s linear infinite" : "none"}>
          <Image src={albumArt} alt="Album Art" boxSize="100%" objectFit="cover" />
        </Box>
        <Text fontSize="lg" mt={2}>{currentSong}</Text>
        <Box display="flex" alignItems="center">
          <IconButton aria-label="Previous" icon={<FaBackward />} size="lg" />
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            size="lg"
            mx={4}
            onClick={handlePlayPause}
          />
          <IconButton aria-label="Next" icon={<FaForward />} size="lg" />
        </Box>
        <Box width="100%" padding="4">
          <Text>Volume</Text>
          <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Container>
  );
};

export default Index;