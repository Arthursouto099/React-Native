import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Posts from "@/components/posts";


export type User = {
    id_user?: string
    name: string
    email: string
    bio?: string

}


export type Post = {
    id_post?: string
    id_user: string
    title: string,
    content: string
    user?: User
    image?: string
}






const mock: Post[] = [
  {
    id_post: "post1",
    id_user: "1",
    title: "Primeiro post",
    content: "Olá, esse é meu primeiro post!",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1011/600/400", // Exemplo imagem
  },
  {
    id_post: "post2",
    id_user: "2",
    title: "Meu dia no parque",
    content: "Hoje fui ao parque e tirei fotos lindas da natureza.",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    id_post: "post3",
    id_user: "3",
    title: "Dicas de React Native",
    content: "Vou compartilhar algumas dicas úteis para quem está começando no React Native.",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1021/600/400",
  },
  {
    id_post: "post4",
    id_user: "1",
    title: "Receita de bolo",
    content: "Compartilhando minha receita favorita de bolo de chocolate.",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1025/600/400",
  },
  {
    id_post: "post5",
    id_user: "4",
    title: "Viagem incrível",
    content: "Acabei de voltar de uma viagem incrível para a praia. Foi maravilhoso!",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1035/600/400",
  },
  {
    id_post: "post6",
    id_user: "2",
    title: "Aprendendo TypeScript",
    content: "Comecei a aprender TypeScript e estou gostando bastante da tipagem estática.",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1043/600/400",
  },
  {
    id_post: "post7",
    id_user: "3",
    title: "Filme recomendado",
    content: "Assisti um filme muito legal ontem, recomendo para todo mundo!",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1050/600/400",
  },
  {
    id_post: "post8",
    id_user: "4",
    title: "Treino do dia",
    content: "Hoje fiz um treino pesado na academia, me senti ótimo depois.",
    user: {
      email: "arthurtavaressouto@gmail.com",
      name: "Arthur",
    },
    image: "https://picsum.photos/id/1060/600/400",
  },
];



export default function Profile() {
    const [user, setUser] = useState<User | null>(null)
    const [posts, setPost] = useState<Post[]>([])

    const { id } = useLocalSearchParams();

    useEffect(() => {
        const getPosts = () => {
            setPost(mock)
        }

        getPosts()
    }, [])



    useEffect(() => {
        const getInfo = async () => {
            const response = await axios.get(`http://172.20.86.125:3000/user/${id}`)
            setUser(response.data.data as User)

        }
        getInfo()
    }, [id])

    return (
        <View className="flex-1 bg-black items-center ">
            <View className="bg-black  h-full w-[100%] m-12">
                <View className="w-full border-b-2 justify-between items-center flex-row  border-white/20 p-3">
                    <Ionicons name="settings-outline" size={29} color="white" />

                    <Text className="text-white text-xl">{user?.name}</Text>

                    <Ionicons name="person" size={29} color="white" />

                </View>


                <View className="w-full h-full">
                    <View className="m-5">
                        <View className="flex-row gap-5 ">



                            <View className="w-32 h-32 border border-1 justify-center items-center border-white/30 rounded-full">
                                <Ionicons name="person" size={60} color="white" />
                            </View>

                            <View className="mt-2 gap-5">
                                <View>
                                    <Text className="text-white text-xl">{user?.name}</Text>
                                    <Text className="text-white text-xs">{user?.email}</Text>
                                </View>

                                <View className="flex-row gap-3">
                                    <TouchableOpacity className=" border border-white/20 justify-center items-center p-3 w-52">
                                        <Text className="text-white  ">
                                            Editar Perfil
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>

                        <View className="mt-10 gap-2">

                            <Text className="text-white/30">BIO</Text>
                            <Text className="text-white">{user?.bio || 'Carregando bio...'}</Text>

                        </View>


                        <View className=" h-[60%]  mt-10">
                            <Posts posts={posts}/>
                        </View>

                    </View>


                </View>

                <View className="absolute h-32 w-full justify-center items-center bg-white/5 bottom-9">
                    <TouchableOpacity className=" border border-white/20 justify-center items-center p-3 ">
                        <Text className="text-white  ">
                           fazer post +
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>


    );


}