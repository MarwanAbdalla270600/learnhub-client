<script>
	import '../app.css';
	import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

	// Register languages
	register('en', () => import('../locales/en.json'));
	register('ar', () => import('../locales/ar.json'));

  locale.set(getLocaleFromNavigator()); // Set the detected locale early

	// Initialize the language (falling back to 'en')
	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator() // Automatically detects user's language
	});
</script>

<slot />
