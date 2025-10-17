import {Text, View} from "react-native"
import './global.css'
import LoginForm from "@/components/login-form";


export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 ">
        <View className="mt-20 justify-center items-center">
            <Text className="p-5 text-white font-bold text-2xl"> Realizar Login</Text>
        </View>

       <LoginForm>
        
       </LoginForm>
    </View>
  );
}
