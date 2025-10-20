import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios"

export default function LoginForm() {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const router = useRouter()

    const onPress = async () => {
        if(!email || !password) {
            Alert.alert("Preencha todos os dados")
            return
        }

        const response = await axios.post("http://172.20.86.125:3000/login", {email, password})
        Alert.alert(response.data.message)

        if(response.status === 200) {
            router.push(`/Screens/home/${response.data.data.id_user}` as any)
            return
        }

        return
        

    }


    return (
        <View className="h-full w-full  ">
            <View className=" h-2/3 m-10  justify-center ">

                <View className="gap-10 ">
                    <TextInput
                    onChangeText={(email) => setEmail(email)}
                        placeholder="seuemail@gmail.com"
                        className="w-full border text-white border-white/20 rounded-md p-5 "
                    />
                    <TextInput
                           onChangeText={(password) => setPassword(password)}
                        placeholder="*********"
                        secureTextEntry={true}
                        className="w-full border text-white border-white/20 rounded-md p-5 "
                    />

                    <View className="w-full justify-center items-center">
                        <TouchableOpacity onPress={onPress} className=" border border-white/20 justify-center items-center p-3 w-40">
                            <Text className="text-white  ">
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>







            </View>
        </View>
    )
}