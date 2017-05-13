import electron = require("electron");
import url = require("url");
import path = require("path");
const { app, BrowserWindow } = electron;

declare var __dirname, process;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1200, height: 600,
		titleBarStyle: 'hidden'
	});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'public/html/auth/login.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', () => {
	createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});