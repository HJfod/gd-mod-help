import './app.css'
import App from './App.svelte'
import { navigateTo } from './Pages';

const app = new App({
    target: document.getElementById('app')
})

const urlParams = new URLSearchParams(window.location.search);
navigateTo(urlParams.get('page') ?? 'home');

export default app
