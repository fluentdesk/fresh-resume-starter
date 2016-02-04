fresh-resume-starter
====================
A starter résumé in [FRESH][f] format. This is the résumé emitted by the
[HackMyResume][hmr] `new` command.

- [**starter-resume.fresh.json**][rf]. The official FRESH-format starter résumé.

- [**starter-resume.jrs.json**][rj]. The same résumé in JSON Resume 0.0.0
format. *Note: JSON Resume doesn't support all FRESH resume sections. This
resume contains a subset of the information from the official FRESH version.*

## Use

In HackMyResume:

```bash
hackmyresume new r0.json # Create a FRESH-format resume by default
hackmyresume new r1.json -f FRESH # Create a FRESH-format resume
hackmyresume new r2.json -f JRS # Create a JRS-format resume

```

In code:

```javascript
var freshStarterResume = require('fresh-resume-starter').fresh;
var jrsStarterResume = require('fresh-resume-starter').jrs;
console.log( freshStarterResume.name );
// > Slim Shady
```

## License

MIT. See [LICENSE.md][lic] for details.

[f]: https://github.com/fluentdesk/FRESCA.git
[hmr]: http://please.hackmyresume.com
[lic]: https://github.com/fluentdesk/fresh-resume-empty/blob/master/LICENSE.md
[rf]: https://github.com/fluentdesk/fresh-resume-starter/blob/master/src/starter-resume.fresh.json
[rj]: https://github.com/fluentdesk/fresh-resume-starter/blob/master/src/starter-resume.jrs.json
