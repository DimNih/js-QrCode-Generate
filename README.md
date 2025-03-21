# JS-QrCode-Generate

## Deskripsi

Ini adalah proyek keren buat generate QR Code Dan Bisa Mendownload ke PNG, pake JavaScript. Cocok banget buat lo yang pengen bikin QR Code dengan mudah dan cepat.


## Importan!!
isi ke file css

```bash
:root {
    --neon-blue: #0ff;
    --dark-bg: #1a1a2e;
    --accent-purple: #6c5ce7;
    --accent-hover: #7c6cf3;
}

body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #1a1a2e, #16213e);
    font-family: 'Segoe UI', sans-serif;
    overflow: hidden;
}

.generator-container {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 0 40px rgba(108, 92, 231, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.08);
    width: 90%;
    max-width: 500px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.generator-container::before {
    content: '';
    position: absolute;
    top: -150%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg, 
        transparent 25%,
        rgba(108, 92, 231, 0.15) 50%,
        transparent 75%
    );
    transform: rotate(45deg);
    animation: borderFlow 8s linear infinite;
    opacity: 0.6;
}

h1 {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

h1 span {
    color: var(--accent-purple);
    font-weight: 600;
}

.input-group {
    position: relative;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s 0.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.input-field {
    width: 90%;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.input-field:focus {
    outline: none;
    border-color: var(--accent-purple);
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.25);
    transform: scale(1.02);
}

.input-label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    padding: 0 5px;
    background: transparent;
}

.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
    top: -10px;
    left: 10px;
    font-size: 0.8rem;
    color: var(--accent-purple);
    background: rgba(26, 26, 46, 0.9);
    transform: translateY(0);
}

.generate-btn {
    width: 100%;
    padding: 1.2rem;
    background: linear-gradient(135deg, var(--accent-purple), var(--accent-hover));
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    position: relative;
    overflow: hidden;
}

.generate-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: transform 0.6s ease;
}

.generate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(108, 92, 231, 0.35);
}

.generate-btn:active {
    transform: translateY(0);
}

.generate-btn:active::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
}
#qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    opacity: 0;
    transform: scale(0.95);
}


#qrcode.show {
    display: block;
    margin-left: 130px;
    animation: qrAppear 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.download-btn {
    display: none;
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-purple);
    border-radius: 12px;
    color: var(--accent-purple);
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateY(10px);
}

.download-btn.show {
    display: block;
    animation: fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.download-btn:hover {
    background: var(--accent-purple);
    color: white;
    transform: translateY(-2px);
}

@keyframes borderFlow {
    0% { transform: rotate(45deg) translateX(-70%); }
    100% { transform: rotate(45deg) translateX(70%); }
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes qrAppear {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes inputError {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(10px); }
    40% { transform: translateX(-10px); }
    60% { transform: translateX(5px); }
    80% { transform: translateX(-5px); }
}

.error {
    animation: inputError 0.6s ease;
    border-color: #ff4757 !important;
}

@media (max-width: 480px) {
    .generator-container {
        padding: 1.8rem;
        width: 95%;
    }
}
```
