import {app} from './app';
import { accessTokenExpire } from './services/jwt.service';

console.log(accessTokenExpire);
app.listen(80,() => {
     console.log('Listening on port 8080');
});