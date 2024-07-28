import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
	const onFetchUpdateAsync = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();

			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			}
		} catch (error) {
			alert(`Error fetching latest Expo update: ${error}`);
		}
	};

	useEffect(() => {
		onFetchUpdateAsync;
	}, []);

	return (
		<SafeAreaProvider>
			<RootNavigation />

			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
};

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default App;
