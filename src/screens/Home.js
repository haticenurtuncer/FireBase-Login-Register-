import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header/Header";
import { AspectRatio, Box, Center, Heading, HStack, Image, ScrollView, Stack } from "native-base";

const Home = () => {
  return (
    <>
      <Header title={"Anasayfa"} />
      <ScrollView>
        <Box alignItems="center">
          <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }} _web={{
            shadow: 2,
          }} _light={{
            backgroundColor: "gray.50",
          }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                  uri: "https://www.ozbilgsoft.com/wp-content/uploads/2021/04/Web-tasariminizi-gelistirmek-icin-6-temel-ipucu.jpg",
                }} alt="image" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
                bg: "violet.400",
              }} _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }} position="absolute" bottom="0" px="3" py="1.5">
                Web
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Web Tasarım
                </Heading>
                <Text fontSize="xs" _light={{
                  color: "violet.500",
                }} _dark={{
                  color: "violet.400",
                }} fontWeight="500" ml="-0.5" mt="-1">
                  "Şimdi hedef kitlenize ulaşabilen bir web tasarım hizmeti alın !"
                </Text>
              </Stack>
              <Text fontWeight="400">
                İş kimliğinizi dijital dünyaya aktarırken köprü görevi gören web tasarımlarında sizin hedefiniz köprü, bizim hedefimiz de köprünün sağlamlığı. Kaliteli ve dayanıklı bir web sitesi için talebinizi uzman ellere bırakın.
              </Text>
            </Stack>
          </Box>
          <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }} _web={{
            shadow: 2,
          }} _light={{
            backgroundColor: "gray.50",
          }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                  uri: "https://veriakademi.com/images/mobil-uygulama-nedir.jpg",
                }} alt="image" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
                bg: "violet.500",
              }} _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }} position="absolute" bottom="0" px="3" py="1.5">
                Mobil
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Benzersiz Tasarım
                </Heading>
                <Text fontSize="xs" _light={{
                  color: "violet.500",
                }} _dark={{
                  color: "violet.400",
                }} fontWeight="500" ml="-0.5" mt="-1">
                  Tasarım noktasında istekleriniz doğrultusunda mobil uygulamanın tasarımı geliştirilir ve bu süreç sizlerin onayları ile ilerler.
                </Text>
                <Heading size="md" ml="-1">
                  Kullanışlı Arayüz
                </Heading>
                <Text fontSize="xs" _light={{
                  color: "violet.500",
                }} _dark={{
                  color: "violet.400",
                }} fontWeight="500" ml="-0.5" mt="-1">
                  Karmaşıklıktan uzak arayüzler ile mobil uygulamanın her noktada kolay ve kullanışlı olması için kullanışlı arayüzle uygulamanızı yazıyoruz.
                </Text>
                <Heading size="md" ml="-1">
                  Uzman Ekip
                </Heading>
                <Text fontSize="xs" _light={{
                  color: "violet.500",
                }} _dark={{
                  color: "violet.400",
                }} fontWeight="500" ml="-0.5" mt="-1">
                  Alanında uzman olan tecrübeli ekibimiz ile tüm detaylar netleştirilir ve projenin tüm aşamalarında profesyonel hizmet sunulur.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;
