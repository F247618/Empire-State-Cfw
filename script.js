function sendToDiscord(section) {
    let message = '';
    let fileInput = null;
    let webhookURL = '';

    switch(section) {
        case 'support':
            message = document.getElementById('supportMessage').value;
            fileInput = document.getElementById('supportFile');
            webhookURL = 'https://discord.com/api/webhooks/1327646269941878800/sKS6bfzUuKESNdOvokucLlU9PCI2r4SADVQkYo0pwK4T5MAztHkiPLaQDWIMWBpz_Lw7';
            break;
        case 'rtteam':
            message = document.getElementById('rtTeamMessage').value;
            fileInput = document.getElementById('rtTeamFile');
            webhookURL = 'https://discord.com/api/webhooks/1327659908258205728/es6EProV1extZpKiaKvZT5B58tLbQyfOspJNipdzPO0N5iFrdJ8zhQ59YWgI7tVLNRVY';
            break;
        case 'bandteam':
            message = document.getElementById('bandTeamMessage').value;
            fileInput = document.getElementById('bandTeamFile');
            webhookURL = 'https://discord.com/api/webhooks/1327660085698363556/FtAEiJRd1zunCU7mCZScwQHoK9m6h7hLoZ35WeAH2GbcBdK0TvlPO5a9NIMajg0pnAMP';
            break;
        default:
            return;
    }

    if (!message && !fileInput.files.length) {
        alert('الرجاء كتابة رسالة أو اختيار ملف قبل الإرسال.');
        return;
    }

    const formData = new FormData();
    formData.append('content', message);
    
    if (fileInput.files.length) {
        formData.append('file', fileInput.files[0]);
    }

    fetch(webhookURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('تم إرسال الرسالة والملف بنجاح!');
            document.getElementById(section + 'Message').value = '';
            fileInput.value = '';
        } else {
            alert('فشل في إرسال الرسالة. حاول مرة أخرى.');
        }
    })
    .catch(error => {
        alert('حدث خطأ: ' + error.message);
    });
}
