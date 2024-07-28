import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const ArtistScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: "Artists",
						headerTitleAlign: "center",
					}}
				/>
			</Stack>
		</View>
	);
};

export default ArtistScreenLayout;
