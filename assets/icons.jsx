import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    help: (props)=> <Ionicons name="help" size={26} {...props} />,
    address: (props)=> <AntDesign name="pluscircleo" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
}