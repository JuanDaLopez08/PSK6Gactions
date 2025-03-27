import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // 10 usuarios virtuales
    duration: '10s', // Ejectutar la prueba durante 10 segundos
};

export default function () {
    let respuesta = http.get('https://test-api.k6.io/public/crocodiles/');
    check(respuesta, {
        'El estado es 200': (r) => r.status === 200,
        'Respuesta en menos de 500ms': (r) => r.timings.duration < 500
    });
    sleep(1);
}