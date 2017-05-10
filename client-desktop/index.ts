import electron = require("electron");
const { app, BrowserWindow } = electron;

declare var __dirname, process;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1200, height: 600
	});

	mainWindow.loadURL('http://google.com');

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