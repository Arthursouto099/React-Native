import { Post } from "@/app/Screens/home/[id]";
import { ScrollView, View, Text, Image } from "react-native";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <ScrollView className="w-full h-full p-4">
      {posts.map((post) => (
        <View key={post.id_post} className="mb-6 border-b border-gray-700 pb-4">
          <Text className="text-white text-xl font-bold">{post.title}</Text>
          <Text className="text-gray-300 mt-1">{post.content}</Text>
          {post.image && (
            <Image
              source={{ uri: post.image }}
              style={{ width: "100%", height: 150, marginTop: 10, borderRadius: 8 }}
              resizeMode="cover"
            />
          )}
          {post.user && (
            <Text className="text-gray-500 mt-2 italic">
              Por: {post.user.name} ({post.user.email})
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  )
}
