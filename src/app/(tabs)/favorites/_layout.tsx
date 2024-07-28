import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const FavoriteScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: "Favorites",
						headerTitleAlign: "center",
					}}
				/>
			</Stack>
		</View>
	);
};

export default FavoriteScreenLayout;
