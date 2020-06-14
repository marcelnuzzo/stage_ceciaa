/*
/ *!
 * Bibliothèque JavaScript jQuery v3.4.1
 * https://jquery.com/
 *
 * Comprend Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation et autres contributeurs
 * Publié sous licence MIT
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21: 04Z
 * /
 */
(fonction (globale, usine) {

	"use strict";

	if (typeof module === "objet" && typeof module.exports === "objet") {

		// Pour les environnements CommonJS et similaires à ceux où une `fenêtre` appropriée
		// est présent, lance la fabrique et récupère jQuery.
		// Pour les environnements qui n'ont pas de `window` avec un` document`
		// (comme Node.js), expose une fabrique sous la forme module.exports.
		// Cela accentue le besoin de créer une vraie `fenêtre`.
		// Par exemple, var jQuery = require ("jquery") (window);
		// Voir ticket # 14549 pour plus d'informations.
		module.exports = global.document?
			usine (globale, vraie):
			fonction (w) {
				si (! w.document) {
					jeter une nouvelle erreur ("jQuery nécessite une fenêtre avec un document");
				}
				retour usine (w);
			};
	} autre {
		usine (globale);
	}

// passe ceci si la fenêtre n'est pas encore définie
}) (typeof window! == "undefined"? window: cette fonction (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// déclenche des exceptions lorsque du code non strict (par exemple, ASP.NET 4.5) accède au mode strict
// arguments.callee.caller (trac-13335). Mais à partir de jQuery 3.0 (2016), le mode strict devrait être commun
// suffit que toutes ces tentatives soient gardées dans un bloc try.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = fonction isFunction (obj) {

      // Assistance: Chrome <= 57, Firefox <= 52
      // Dans certains navigateurs, typeof renvoie "function" pour les éléments HTML <object>
      // (c'est-à-dire, `typeof document.createElement (" objet ") ===" fonction "`).
      // Nous ne voulons pas classer * aucun * nœud DOM en tant que fonction.
      return typeof obj === "fonction" && typeof obj.nodeType! == "numéro";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preserveScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	fonction DOMEval (code, noeud, doc) {
		doc = doc || document;

		var i, val,
			script = doc.createElement ("script");

		script.text = code;
		si (noeud) {
			for (i dans preserveScriptAttributes) {

				// Support: Firefox 64+, Edge 18+
				// Certains navigateurs ne supportent pas la propriété "nonce" sur les scripts.
				// D'autre part, utiliser simplement `getAttribute` ne suffit pas
				// l'attribut `nonce` est réinitialisé à une chaîne vide à chaque fois
				// devient connecté au contexte de navigation.
				// Voir https://github.com/whatwg/html/issues/2369
				// Voir https://html.spec.whatwg.org/#nonce-attributes
				// Le contrôle `node.getAttribute` a été ajouté pour des raisons de
				// `jQuery.globalEval` afin qu'il puisse simuler un nœud contenant du nonce
				// via un objet.
				val = noeud [i] || node.getAttribute && node.getAttribute (i);
				si (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


fonction toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Support: Android <= 2.3 seulement (fonctionnal RegExp)
	retour typeof obj === "objet" || typeof obj === "fonction"?
		class2type [toString.call (obj)] || "objet" :
		typeof obj;
}
/ * symbole global * /
// Définir ce global dans .eslintrc.json créerait un danger d’utiliser le global
// non surveillé ailleurs, il semble plus sûr de définir global uniquement pour ce module



var
	version = "3.4.1",

	// Définir une copie locale de jQuery
	jQuery = fonction (sélecteur, contexte) {

		// L'objet jQuery est en réalité juste le constructeur init 'amélioré'
		// Need init si jQuery est appelé (permettez simplement qu'une erreur soit renvoyée si elle n'est pas incluse)
		renvoie le nouveau jQuery.fn.init (sélecteur, contexte);
	},

	// Support: Android <= 4.0 uniquement
	// Assurez-vous de couper la nomenclature et le NBSP
	rtrim = / ^ [\ s \ uFef \ xA0] + | [\ s \ uFFE \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// La version actuelle de jQuery utilisée
	jquery: version,

	constructeur: jQuery,

	// La longueur par défaut d'un objet jQuery est 0
	longueur: 0

	toArray: function () {
		retourne slice.call (this);
	},

	// Obtient le Nième élément du jeu d'éléments correspondants OU
	// Récupère l'ensemble des éléments correspondants sous forme de tableau propre
	get: function (num) {

		// Retourne tous les éléments d'un tableau propre
		si (num == null) {
			retourne slice.call (this);
		}

		// Retourne seulement le seul élément de l'ensemble
		renvoyer num <0? this [num + this.length]: this [num];
	},

	// Prend un tableau d'éléments et le pousse sur la pile
	// (retourne le nouvel ensemble d'éléments correspondants)
	pushStack: fonction (elems) {

		// Construire un nouveau jeu d'éléments correspondant à jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Ajoute l'ancien objet à la pile (comme référence)
		ret.prevObject = this;

		// retourne le jeu d'éléments nouvellement formé
		retour ret;
	},

	// Exécute un rappel pour chaque élément du jeu correspondant.
	chacun: fonction (rappel) {
		retourne jQuery.each (this, callback);
	},

	map: fonction (rappel) {
		retourne this.pushStack (jQuery.map (this, fonction (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	tranche: function () {
		return this.pushStack (slice.apply (this, arguments));
	},

	premier: function () {
		renvoyer this.eq (0);
	},

	dernier: function () {
		retourne this.eq (-1);
	},

	eq: fonction (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		renvoyer this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	fin: fonction () {
		renvoyer this.prevObject || this.constructor ();
	},

	// Pour usage interne uniquement.
	// se comporte comme une méthode Array, pas comme une méthode jQuery.
	poussez, poussez,
	trier: arr.sort,
	épissure: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	options var, nom, src, copie, copyIsArray, clone,
		target = arguments [0] || {},
		i = 1,
		longueur = arguments.length,
		profond = faux;

	// Gérer une situation de copie profonde
	if (typeof target === "boolean") {
		profond = cible;

		// Ignore le booléen et la cible
		target = arguments [i] || {};
		i ++;
	}

	// Gère le cas où la cible est une chaîne ou quelque chose (possible en copie profonde)
	if (typeof target! == "object" &&! isFunction (target)) {
		cible = {};
	}

	// Étendre jQuery lui-même si un seul argument est passé
	si (i === longueur) {
		cible = ceci;
		je--;
	}

	pour (; i <longueur; i ++) {

		// Ne traite que des valeurs non nulles / indéfinies
		if ((options = arguments [i])! = null) {

			// Étendre l'objet de base
			pour (nom dans les options) {
				copy = options [nom];

				// Prévenir la pollution d'objet.prototype
				// Empêche la boucle sans fin
				if (nom === "__proto__" || cible === copie) {
					continuer;
				}

				// Recurse si nous fusionnons des objets simples ou des tableaux
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy))))) {
					src = cible [nom];

					// Assure le type approprié pour la valeur source
					if (copyIsArray &&! Array.isArray (src)) {
						clone = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						clone = {};
					} autre {
						clone = src;
					}
					copyIsArray = false;

					// Ne déplace jamais les objets originaux, clone-les
					target [name] = jQuery.extend (deep, clone, copy);

				// N'apporte pas de valeurs indéfinies
				} sinon si (copie! == non définie) {
					cible [nom] = copier;
				}
			}
		}
	}

	// retourne l'objet modifié
	cible de retour;
};

jQuery.extend ({

	// Unique pour chaque copie de jQuery sur la page
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Suppose que jQuery est prêt sans le module ready
	isReady: true,

	erreur: fonction (msg) {
		jeter une nouvelle erreur (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Détecte les négatifs évidents
		// Utilisez toString au lieu de jQuery.type pour intercepter des objets hôtes
		if (! obj || toString.call (obj)! == "[objet Objet]") {
			retourne faux;
		}

		proto = getProto (obj);

		// Les objets sans prototype (par exemple, `Object.create (null)`) sont simples
		si (! proto) {
			retourne vrai;
		}

		// Les objets avec prototype sont clairs si et seulement s'ils ont été construits par une fonction Object globale
		Ctor = hasOwn.call (proto, "constructeur") && proto.constructor;
		return typeof Ctor === "fonction" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {
		nom var;

		pour (nom dans obj) {
			retourne faux;
		}
		retourne vrai;
	},

	// évalue un script dans un contexte global
	globalEval: fonction (code, options) {
		DOMEval (code, {nonce: options && options.nonce});
	},

	each: function (obj, rappel) {
		var longueur, i = 0;

		if (isArrayLike (obj)) {
			longueur = longueur d'objet;
			pour (; i <longueur; i ++) {
				if (callback.call (obj [i], i, obj [i]) === faux) {
					Pause;
				}
			}
		} autre {
			pour (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === faux) {
					Pause;
				}
			}
		}

		retour obj;
	},

	// Support: Android <= 4.0 uniquement
	trim: fonction (texte) {
		retourne le texte == null?
			"":
			(text + "") .replace (rtrim, "");
	},

	// résultats est pour usage interne seulement
	makeArray: fonction (arr, résultats) {
		var ret = résultats || [];

		si (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "chaîne"?
					[arr]: arr
				)
			} autre {
				push.call (ret, arr);
			}
		}

		retour ret;
	},

	inArray: fonction (elem, arr, i) {
		retour arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
	// push.apply (_, arraylike) jette sur un ancien WebKit
	fusion: fonction (premier, deuxième) {
		var len = + second.length,
			j = 0,
			i = première.longueur;

		pour (; j <len; j ++) {
			premier [i ++] = deuxième [j];
		}

		première longueur = i;

		retourne en premier;
	},

	grep: fonction (elems, callback, invert) {
		var callbackInverse,
			correspond à = [],
			i = 0,
			longueur = elems.length,
			callbackExpect =! invert;

		// Parcourez le tableau en ne sauvegardant que les éléments
		// qui passe la fonction validateur
		pour (; i <longueur; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		matchs de retour;
	},

	// arg est réservé à l'usage interne
	map: fonction (elems, callback, arg) {
		var longueur, valeur,
			i = 0,
			ret = [];

		// Parcourt le tableau en traduisant chacun des éléments en leurs nouvelles valeurs
		if (isArrayLike (elems)) {
			longueur = elems.length;
			pour (; i <longueur; i ++) {
				valeur = rappel (elems [i], i, arg);

				si (valeur! = null) {
					ret.push (valeur);
				}
			}

		// passe en revue toutes les clés de l'objet,
		} autre {
			pour (i in elems) {
				valeur = rappel (elems [i], i, arg);

				si (valeur! = null) {
					ret.push (valeur);
				}
			}
		}

		// Aplatir les tableaux imbriqués
		retour concat.apply ([], ret);
	},

	// Un compteur global GUID pour les objets
	guid: 1,

	// jQuery.support n'est pas utilisé dans Core, mais d'autres projets attachent leur
	// propriétés à lui donc il doit exister.
	support: support
});

if (typeof Symbol === "fonction") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Remplir la carte class2type
jQuery.each ("Boolean Number String Function Array Date RegExp Object Error Symbol" .split (""),
fonction (i, nom) {
	class2type ["[objet" + nom + "]"] = nom.toLowerCase ();
});

fonction isArrayLike (obj) {

	// Support: réel iOS 8.2 seulement (non reproductible dans le simulateur)
	// contrôle `in` utilisé pour éviter les erreurs JIT (gh-2145)
	// hasOwn n'est pas utilisé ici en raison de faux négatifs
	// concernant la longueur de la liste de noeuds dans IE
	var longueur = !! obj && "longueur" dans obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		retourne faux;
	}

	type de retour === "tableau" || longueur === 0 ||
		typeof longueur === "nombre" && longueur> 0 && (longueur - 1) dans obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation et autres contributeurs
 * Publié sous licence MIT
 * https://js.foundation/
 *
 * Date: 2019-04-08
 * /
(fonction (fenêtre) {

var i,
	soutien,
	Expr,
	getText,
	isXML,
	tokenize,
	compiler,
	sélectionner,
	le plus extérieurContext,
	sortInput,
	hasDuplicate,

	// vars de documents locaux
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	allumettes,
	contient

	// Données spécifiques à l'instance
	expando = "grésillement" + 1 * nouvelle date (),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = function (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		retourne 0;
	},

	// méthodes d'instance
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Utilisez un indexOf simplifié, car il est plus rapide que natif
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = fonction (liste, elem) {
		var i = 0,
			len = list.length;
		pour (; i <len; i ++) {
			if (list [i] === elem) {
				retourne i;
			}
		}
		return -1;
	},

	booleans = "vérifié | sélectionné | asynchrone | autofocus | lecture automatique | contrôles | différer | désactivé | caché | ismap | boucle | multiple | ouvert | en lecture seule | obligatoire | scoped",

	// Expressions régulières

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifiant = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// sélecteurs d'attributs: http://www.w3.org/TR/selectors/#attribute-selectors
	attributs = "\\ [" + espace + "* (" + identifiant + ") (?:" + espace +
		// Opérateur (capture 2)
		"* ([* ^ $ |! ~]? =)" + espaces +
		// "Les valeurs d'attribut doivent être des identifiants CSS [capture 5] ou des chaînes de caractères [capture 3 ou capture 4]"
		"* (?: '((?: \\\\. | [^ \\\\' ')) *)' | \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identifiant + ")) |)" + espaces +
		"* \\]",

	pseudos = ":(" + identifiant + ") (?: \\ ((" +
		// Pour réduire le nombre de sélecteurs ayant besoin de tokenize dans le pré-filtre, préférez les arguments:
		// 1. cité (capture 3; capture 4 ou capture 5)
		"('((?: \\\\. | [^ \\\\' ')) *)' | \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (capture 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + attributs + ") *) |" +
		// 3. autre chose (capture 2)
		". *" +
		") \\) |)",

	// espaces blancs de fin et de début et de fin, en capturant certains caractères non-blancs précédant ces derniers
	rwhitespace = new RegExp (espaces + "+", "g"),
	rtrim = new RegExp ("^" + espace + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espace + + ", $ g, "),

	rcomma = new RegExp ("^" + espace + "*," + espace + "*"),
	rcombinators = new RegExp ("^" + espace + "* ([> + ~] |" + espace + ")" + espace + + "*"),
	rdescend = new RegExp (espace + "|>"),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identifiant + "$"),

	matchExpr = {
		"ID": new RegExp ("^ # (" + identifier + ")"),
		"CLASS": new RegExp ("^ \\. (" + Identifier + ")"),
		"TAG": new RegExp ("^ (" + identifiant + "| [*])"),
		"ATTR": nouvelle RegExp ("^" + attributs),
		"PSEUDO": nouvelle RegExp ("^" + pseudos),
		"CHILD": new RegExp ("^ :( uniquement | premier | dernier | nième | dernier-dernier) - (enfant | de type) (?: \\ (" + espace +
			"* (pair | impair | (([+ -] |) (\\ d *) n |)" + espace + "* (?: ([+ -] |)" + espace +
			"* (\\ d +) |))" + espaces + "* \\) |)", "i"),
		"bool": new RegExp ("^ (?:" + booleans + ") $", "i"),
		// À utiliser dans les bibliothèques implémentant .is ()
		// Nous l'utilisons pour la correspondance des points de vente dans `select`
		"needsContext": new RegExp ("^" + espace + "* [> + ~] |: (pair | impair | eq | gt | lt | nth | premier | dernier) (?: \\ (" +
			espace blanc "" ((?: - \\ d)? \\ d *) "+ espace blanc +" * \\) |) (? = [^ -] | $) "," i ")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [natif \ w /,

	// Sélecteurs ID, TAG ou CLASS facilement analysables / récupérables
	rquickExpr = /^(?:#([\w-]+ )|(\w+)|\.([\w-]+))$$,

	rsibling = / [+ ~] /,

	// échappe aux CSS
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espace + "? | (" + espace + ") |.)", "ig"),
	funescape = function (_, échappé, échappéWhitespace) {
		var high = "0x" + échappé - 0x10000;
		// NaN signifie non-codepoint
		// Support: Firefox <24
		// Solution de contournement interprétation numérique erronée de + "0x"
		retour haut! == haut || échappéWhitespace?
			échappé :
			élevé <0?
				// point de code BMP
				String.fromCharCode (high + 0x10000):
				// Point de code du plan supplémentaire (paire de substitution)
				String.fromCharCode (high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	},

	// Sérialisation de chaîne / identifiant CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL devient U + FFFD REMPLACEMENT CHARACTER
			si (ch === "\ 0") {
				retourne "\ uFFFD";
			}

			// Les caractères de contrôle et les nombres (en fonction de la position) sont échappés en tant que points de code
			return ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// D'autres caractères ASCII potentiellement spéciaux sont protégés par une barre oblique inverse
		retourne "\\" + ch;
	},

	// Utilisé pour les iframes
	// Voir setDocument ()
	// La suppression du wrapper de la fonction provoque une "autorisation refusée"
	// erreur dans IE
	unloadHandler = function () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		fonction (elem) {
			return elem.disabled === true && elem.nodeName.toLowerCase () === "fieldset";
		},
		{dir: "parentNode", ensuite: "légende"}
	)

// Optimiser pour push.apply (_, NodeList)
essayer {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	)
	// Support: Android <4.0
	// Détecter un échec silencieux push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {apply: arr.length?

		// Effet slice si possible
		fonction (cible, els) {
			push_native.apply (cible, slice.call (els));
		}:

		// Support: IE <9
		// Sinon, ajoute directement
		fonction (cible, els) {
			var j = target.length,
				i = 0;
			// ne peut pas faire confiance à NodeList.length
			while ((cible [j ++] = els [i ++])) {}
			longueur cible = j - 1;
		}
	};
}

fonction Sizzle (sélecteur, contexte, résultats, graine) {
	var m, i, elem, nid, match, groupes, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType par défaut à 9, puisque context est par défaut document
		nodeType = contexte? context.nodeType: 9;

	résultats = résultats || [];

	// retour anticipé des appels avec sélecteur ou contexte non valide
	if (typeof selector! == "chaîne" ||! sélecteur ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		renvoyer les résultats;
	}

	// Essayer de raccourcir les opérations de recherche (par opposition aux filtres) dans les documents HTML
	si (! graine) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (context);
		}
		context = context || document;

		si (documentIsHTML) {

			// Si le sélecteur est suffisamment simple, essayez d'utiliser une méthode DOM "get * By *"
			// (sauf le contexte DocumentFragment, où les méthodes n'existent pas)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector)))) {

				// sélecteur d'identifiant
				si ((m = match [1])) {

					// contexte du document
					if (nodeType === 9) {
						if ((elem = context.getElementById (m)))) {

							// Support: IE, Opera, Webkit
							// TODO: identifier les versions
							// getElementById peut faire correspondre les éléments par leur nom plutôt que par leur ID
							if (elem.id === m) {
								résultats.push (elem);
								renvoyer les résultats;
							}
						} autre {
							renvoyer les résultats;
						}

					// contexte d'élément
					} autre {

						// Support: IE, Opera, Webkit
						// TODO: identifier les versions
						// getElementById peut faire correspondre les éléments par leur nom plutôt que par leur ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contient (contexte, elem) &&
							elem.id === m) {

							résultats.push (elem);
							renvoyer les résultats;
						}
					}

				// Sélecteur de type
				} sinon si (correspond [2]) {
					push.apply (résultats, context.getElementsByTagName (sélecteur));
					renvoyer les résultats;

				// sélecteur de classe
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (résultats, context.getElementsByClassName (m));
					renvoyer les résultats;
				}
			}

			// Profitez de querySelectorAll
			si (support.qsa &&
				! nonnativeSelectorCache [sélecteur + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (sélecteur)) &&

				// Support: IE 8 uniquement
				// Exclure des éléments d'objet
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "object")) {

				newSelector = sélecteur;
				newContext = context;

				// qSA prend en compte des éléments extérieurs à une racine de périmètre lors de l'évaluation de l'enfant ou
				// combinateurs descendants, ce qui n'est pas ce que nous voulons.
				// Dans ce cas, nous contournons le comportement en préfixant chaque sélecteur de la liste.
				// liste avec un sélecteur d'ID référençant le contexte de la portée.
				// Merci à Andrew Dupont pour cette technique.
				if (nodeType === 1 && rdescend.test (sélecteur)) {

					// Capture l'ID de contexte, en le définissant d'abord si nécessaire
					if ((nid = context.getAttribute ("id")))) {
						nid = nid.replace (rcssescape, fcssescape);
					} autre {
						context.setAttribute ("id", (nid = expando));
					}

					// Préfixe tous les sélecteurs de la liste
					groupes = tokenize (sélecteur);
					i = groupes.longueur;
					alors que je-- ) {
						groupes [i] = "#" + nid + "" + sélecteur (groupes [i]);
					}
					newSelector = groups.join (",");

					// Développer le contexte pour les sélecteurs frères
					newContext = rsibling.test (sélecteur) && testContext (context.parentNode) ||
						le contexte;
				}

				essayer {
					push.apply (résultats,
						newContext.querySelectorAll (newSelector)
					)
					renvoyer les résultats;
				} catch (qsaError) {
					nonnativeSelectorCache (selector, true);
				} enfin {
					if (nid === expando) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Tous les autres
	return select (selector.replace (rtrim, "$ 1"), contexte, résultats, valeur de départ);
}

/ **
 * Créer des caches clé-valeur de taille limitée
 * @returns {function (string, object)} renvoie les données de l'objet après l'avoir stocké sur lui-même avec
 * nom de la propriété de la chaîne (suffixe d'espace) et (si le cache est plus grand que Expr.cacheLength)
 * supprimer l'entrée la plus ancienne
 * /
fonction createCache () {
	var keys = [];

	cache de fonction (clé, valeur) {
		// Utilisez (clé + "") pour éviter les collisions avec les propriétés du prototype natif (voir le problème n ° 157).
		if (keys.push (key + "")> Expr.cacheLength) {
			// Ne conserve que les entrées les plus récentes
			supprimer le cache [keys.shift ()];
		}
		return (cache [clé + ""] = valeur);
	}
	retourner le cache;
}

/ **
 * Marquer une fonction pour une utilisation spéciale par Sizzle
 * @param {Fonction} fn La fonction à marquer
 * /
fonction markFunction (fn) {
	fn [expando] = true;
	return fn;
}

/ **
 * Prise en charge des tests à l'aide d'un élément
 * @param {Fonction} fn A transmis l'élément créé et retourne un résultat booléen
 * /
fonction assert (fn) {
	var el = document.createElement ("fieldset");

	essayer {
		retourne !! fn (el);
	} catch (e) {
		retourne faux;
	} enfin {
		// Supprimer de son parent par défaut
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// libère de la mémoire dans IE
		el = null;
	}
}

/ **
 * Ajoute le même gestionnaire pour tous les attrs spécifiés
 * @param {String} attrs Liste d'attributs séparés par des tuyaux
 * @param {Function} handler La méthode qui sera appliquée
 * /
fonction addHandle (attrs, gestionnaire) {
	var arr = attrs.split ("|"),
		i = arr.length;

	alors que je-- ) {
		Expr.attrHandle [arr [i]] = gestionnaire;
	}
}

/ **
 * Vérifie l'ordre des documents de deux frères et sœurs
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Retourne moins que 0 si a précède b, plus grand que 0 si a suit b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Utiliser IE sourceIndex si disponible sur les deux nœuds
	si (diff) {
		return diff;
	}

	// Vérifie si b suit a
	si (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				return -1;
			}
		}
	}

	retourner un? 1: -1;
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour les types d'entrée
 * type @param {String}
 * /
fonction createInputPseudo (type) {
	fonction de retour (elem) {
		nom var = elem.nodeName.toLowerCase ();
		nom de retour === "entrée" && elem.type === type;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour les boutons
 * type @param {String}
 * /
fonction createButtonPseudo (type) {
	fonction de retour (elem) {
		nom var = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "bouton") && elem.type === type;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour: enabled /: disabled
 * @param {Boolean} disabled true pour: disabled; false pour: activé
 * /
function createDisabledPseudo (désactivé) {

	// connu: désactivé faux positifs: fieldset [disabled]> légende: n-de-type (n + 2): peut-désactiver
	fonction de retour (elem) {

		// Seuls certains éléments peuvent correspondre: activé ou désactivé
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("form" in elem) {

			// Vérifier la désactivation héritée sur les éléments pertinents non désactivés:
			// * éléments listés associés à un formulaire dans un groupe de champs désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * éléments d'option dans un groupe optionnel désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Tous ces éléments ont une propriété "form".
			if (elem.parentNode && elem.disabled === false) {

				// Les éléments d'option sont reportés à un groupe optionnel parent s'il est présent
				if ("label" in elem) {
					if ("label" dans elem.parentNode) {
						return elem.parentNode.disabled === désactivé;
					} autre {
						return elem.disabled === désactivé;
					}
				}

				// Support: IE 6 - 11
				// Utilisez la propriété de raccourci isDisabled pour rechercher les ancêtres d'ensembles de champs désactivés.
				return elem.isDisabled === désactivé ||

					// S'il n'y a pas isDisabled, vérifiez manuellement
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						inDisabledFieldset (elem) === désactivé;
			}

			return elem.disabled === désactivé;

		// Essayez de vaincre les éléments qui ne peuvent pas être désactivés avant de faire confiance à la propriété désactivée.
		// Certaines victimes se font prendre dans notre réseau (label, légende, menu, piste), mais il ne faut pas
		// existent même sur eux, et encore moins ont une valeur booléenne.
		} else if ("label" dans elem) {
			return elem.disabled === désactivé;
		}

		// Les éléments restants ne sont ni activés ni désactivés
		retourne faux;
	};
}

/ **
 * Retourne une fonction à utiliser dans les pseudos pour les positions
 * @param {Fonction} fn
 * /
fonction createPositionalPseudo (fn) {
	retourne markFunction (function (argument) {
		argument = + argument;
		retourne markFunction (fonction (graine, correspond)) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Correspond aux éléments trouvés dans les index spécifiés
			alors que je-- ) {
				if (graine [(j = matchIndexes [i])])) {
					graine [j] =! (correspond à [j] = graine [j]);
				}
			}
		});
	});
}

/ **
 * Vérifie la validité d'un nœud en tant que contexte Sizzle
 * @param {Element | Object =} contexte
 * @returns {Element | Object | Boolean} Le nœud d'entrée, si acceptable, sinon une valeur falsy
 * /
fonction testContext (context) {
	return context && typeof context.getElementsByTagName! == "indéfini" && context;
}

// Exposer les supports de support pour plus de commodité
support = Sizzle.support = {};

/ **
 * Détecte les nœuds XML
 * @param {Element | Object} elem Un élément ou un document
 * @returns {Boolean} True iff elem est un noeud XML non HTML.
 * /
isXML = Sizzle.isXML = function (elem) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// Support: IE <= 8
	// Assume HTML lorsque documentElement n'existe pas encore, par exemple lors du chargement d'iframes
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (espace de noms || docElem && docElem.nodeName || "HTML");
};

/ **
 * Définit les variables liées au document une fois en fonction du document actuel
 * @param {Element | Object} [doc] Elément ou objet de document à utiliser pour définir le document.
 * @returns {Object} Renvoie le document actuel.
 * /
setDocument = Sizzle.setDocument = fonction (noeud) {
	var hasCompare, subWindow,
		doc = noeud? node.ownerDocument || noeud: preferredDoc;

	// retourne tôt si le document est invalide ou déjà sélectionné
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		document de retour;
	}

	// Mise à jour des variables globales
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (document);

	// Support: IE 9-11, Edge
	// L'accès aux documents iframe après le déchargement génère des erreurs "autorisation refusée" (jQuery # 13936)
	if (preferredDoc! == document &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Support: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Support: IE 9 - 10 seulement
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/* Les attributs
	-------------------------------------------------- -------------------- * /

	// Support: IE <8
	// Vérifier que getAttribute renvoie vraiment des attributs et non des propriétés
	// (sauf les booléens IE8)
	support.attributes = assert (fonction (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) By *
	-------------------------------------------------- -------------------- * /

	// Vérifie si getElementsByTagName ("*") ne renvoie que des éléments
	support.getElementsByTagName = assert (fonction (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Support: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Support: IE <10
	// Vérifie si getElementById renvoie les éléments par leur nom
	// Les méthodes getElementById cassées ne récupèrent pas les noms définis par programme,
	// utilise donc un test giratoire getElementsByName
	support.getById = assert (fonction (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// filtre d'ID et recherche
	if (support.getById) {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = fonction (id, contexte) {
			if (typeof context.getElementById! == "indéfini" && documentIsHTML) {
				var elem = context.getElementById (id);
				retourner elem? [elem]: [];
			}
		};
	} autre {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			fonction de retour (elem) {
				var node = type of elem.getAttributeNode! == "indéfini" &&
					elem.getAttributeNode ("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 uniquement
		// getElementById n'est pas fiable en tant que raccourci de recherche
		Expr.find ["ID"] = fonction (id, contexte) {
			if (typeof context.getElementById! == "indéfini" && documentIsHTML) {
				noeud var, i, elems,
					elem = context.getElementById (id);

				si (elem) {

					// Vérifier l'attribut id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Revenir sur getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				revenir [];
			}
		};
	}

	// Tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		fonction (tag, contexte) {
			if (typeof context.getElementsByTagName! == "indéfini") {
				return context.getElementsByTagName (tag);

			// Les noeuds DocumentFragment n'ont pas gEBTN
			} sinon si (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		fonction (tag, contexte) {
			var elem
				tmp = [],
				i = 0,
				// Heureusement, un gEBTN (brisé) apparaît également sur les nœuds DocumentFragment
				résultats = context.getElementsByTagName (tag);

			// Filtre les commentaires possibles
			if (tag === "*") {
				while ((elem = résultats [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				tmp de retour;
			}
			renvoyer les résultats;
		};

	// classe
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "indéfini" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Support de QSA et matchesSelector

	// matchesSelector (: actif) signale false quand true (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) signale false quand true (Chrome 21)
	// Nous autorisons cela à cause d'un bogue dans IE8 / 9 qui génère une erreur
	// chaque fois que l'accès à `document.activeElement` est effectué sur un iframe
	// Donc, nous permettons à: focus de passer tout le temps par QSA pour éviter l'erreur IE
	// Voir https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll)))) {
		// Construit une expression rationnelle QSA
		// Stratégie de Regex adoptée par Diego Perini
		assert (fonction (el) {
			// Select est défini pour vider la chaîne volontairement
			// Ceci est pour tester le traitement par IE de pas explicitement
			// définition d'un attribut de contenu booléen,
			// puisque sa présence devrait suffire
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </ option> </ select>";

			// Support: IE8, Opera 11-12.16
			// Rien ne doit être sélectionné lorsque des chaînes vides suivent ^ = ou $ = ou * =
			// L'attribut test doit être inconnu dans Opera mais "sûr" pour WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[[msallowcapture ^ = '']]"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espaces + "* (?: '' | \" \ ")");
			}

			// Support: IE8
			// Les attributs booléens et "valeur" ne sont pas traités correctement
			if (! el.querySelectorAll ("[sélectionné]"). longueur) {
				rbuggyQSA.push ("\\ [" + espace + "* (?: valeur |" + booleans + ")");
			}

			// Assistance: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: coché devrait renvoyer les éléments d'option sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (! el.querySelectorAll (": vérifié"). longueur) {
				rbuggyQSA.push (": vérifié");
			}

			// Assistance: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Le sélecteur sur la page `selector # id si-siner-combinator` échoue
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		assert (fonction (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </ select>";

			// Assistance: applications natives Windows 8
			// Les attributs de type et de nom sont restreints lors de l'affectation .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("type", "caché");
			el.appendChild (entrée) .setAttribute ("nom", "D");

			// Support: IE8
			// Impose la casse de l'attribut name
			if (el.querySelectorAll ("[nom = d]"). longueur) {
				rbuggyQSA.push ("nom" + espace + + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: activé /: éléments désactivés et masqués (les éléments masqués sont toujours activés)
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": activé", ": désactivé");
			}

			// Support: IE9-11 +
			// IE: le sélecteur disabled ne récupère pas les enfants des champs désactivés
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": activé", ": désactivé");
			}

			// Opera 10-11 ne jette pas de pseudos invalides après la virgule
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((correspond = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector))))) {

		assert (fonction (el) {
			// Vérifie s'il est possible de faire des correspondancesSelector
			// sur un noeud déconnecté (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Cela devrait échouer avec une exception
			// Gecko ne commet pas d'erreur, renvoie false à la place
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contient
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// L'élément contient un autre
	// volontairement exclusif
	// Comme dans, un élément ne se contient pas
	contient = hasCompare || rnative.test (docElem.contains)?
		fonction (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			retourne un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		fonction (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						retourne vrai;
					}
				}
			}
			retourne faux;
		};

	/ * Tri
	-------------------------------------------------- -------------------- * /

	// Tri des commandes de documents
	sortOrder = hasCompare?
	fonction (a, b) {

		// Indicateur de suppression des doublons
		si (a === b) {
			hasDuplicate = true;
			retourne 0;
		}

		// Tri sur l'existence de la méthode si une seule entrée a compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparer) {
			retourne la comparaison;
		}

		// Calcule la position si les deux entrées appartiennent au même document
		comparer = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Sinon on sait qu'ils sont déconnectés
			1;

		// Noeuds déconnectés
		si (comparer & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === comparez)) {

			// Choisissez le premier élément lié à notre document préféré
			if (a === document || a.ownerDocument === preferredDoc && contient (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contient (preferredDoc, b)) {
				retourne 1;
			}

			// Maintenir l'ordre original
			retourner sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		retourne comparer & 4? -1: 1;
	}:
	fonction (a, b) {
		// quitte tôt si les noeuds sont identiques
		si (a === b) {
			hasDuplicate = true;
			retourne 0;
		}

		var cur,
			i = 0,
			aup = un.parentNode,
			bup = b.parentNode,
			ap = [a],
			pb = [b];

		// Les noeuds sans parent sont des documents ou sont déconnectés
		si (! aup ||! bup) {
			renvoyer un document ===? -1 :
				b === document? 1 :
				aup? -1 :
				bup? 1 :
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si les nœuds sont frères, nous pouvons faire une vérification rapide
		} sinon si (aup === bup) {
			renvoyer frereCheck (a, b);
		}

		// Sinon, nous avons besoin de la liste complète de leurs ancêtres pour la comparaison
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Descendre l'arbre à la recherche d'un écart
		tandis que (ap [i] === bp [i]) {
			i ++;
		}

		retourner je?
			// Vérifie si les nœuds ont un ancêtre commun
			siblingCheck (ap [i], pb [i]):

			// Sinon, les noeuds de notre document sont triés en premier
			ap [i] === preferredDoc? -1 :
			bp [i] === preferredDoc? 1 :
			0;
	};

	document de retour;
};

Sizzle.matches = function (expr, elements) {
	retourne Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = fonction (elem, expr) {
	// Définir les vars de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		essayer {
			var ret = matches.call (elem, expr);

			// Matchselector de IE 9 renvoie false sur les nœuds déconnectés
			if (ret || support.disconnectedMatch ||
					// On dit aussi que les noeuds déconnectés sont dans un document
					// fragment dans IE 9
					elem.document && elem.document.nodeType! == 11) {
				retour ret;
			}
		} catch (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	retourne Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Définir les vars de document si nécessaire
	if ((context.ownerDocument || context)! == document) {
		setDocument (context);
	}
	retour contient (contexte, elem);
};

Sizzle.attr = fonction (elem, name) {
	// Définir les vars de document si nécessaire
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Ne vous laissez pas berner par les propriétés Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML):
			indéfini;

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (name):
			(val = elem.getAttributeNode (name)) && val.specified?
				valeur.val:
				nul;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Error ("Erreur de syntaxe, expression non reconnue:" + msg);
};

/ **
 * Tri de documents et suppression des doublons
 * @param {ArrayLike} résultats
 * /
Sizzle.uniqueSort = fonction (résultats) {
	var elem
		doublons = [],
		j = 0,
		i = 0;

	// À moins que nous * sachions *, nous pouvons détecter les doublons, assumer leur présence
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	si (hasDuplicate) {
		while ((elem = résultats [i ++])) {
			if (elem === résultats [i]) {
				j = doublons.push (i);
			}
		}
		tandis que (j--) {
			résultats.splice (duplicates [j], 1);
		}
	}

	// Effacer l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	renvoyer les résultats;
};

/ **
 * Fonction utilitaire permettant de récupérer la valeur textuelle d'un tableau de noeuds DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	noeud var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Si aucun type de noeud, cela devrait être un tableau
		while ((node ​​= elem [i ++])) {
			// Ne traverse pas les nœuds de commentaires
			ret + = getText (noeud);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Utiliser textContent pour les éléments
		// Utilisation de innerText supprimée pour assurer la cohérence des nouvelles lignes (jQuery # 11153)
		if (typeof elem.textContent === "chaîne") {
			return elem.textContent;
		} autre {
			// Traverse ses enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// Ne pas inclure de nœud de commentaire ou d'instruction de traitement

	retour ret;
};

Expr = Sizzle.selectors = {

	// Peut être ajusté par l'utilisateur
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	trouver: {},

	parent: {
		">": {dir: "parentNode", d'abord: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", premier: vrai},
		"~": {dir: "previousSibling"}
	},

	preFilter: {
		"ATTR": fonction (correspondance) {
			match [1] = match [1] .replace (runescape, funescape);

			// Déplace la valeur donnée pour qu'elle corresponde à [3] entre guillemets ou non
			match [3] = (match [3] || match [4] || match [5] || "") .remplace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			retour match.slice (0, 4);
		},

		"ENFANT": fonction (match) {
			/ * correspond à matchExpr ["ENFANT"]
				1 type (seulement | nième | ...)
				2 quoi (enfant | de type)
				3 arguments (pair | impair | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 composant xn de l'argument xn + y ([+ -]? \ D * n |)
				5 signe de xn-composant
				6 x de composant xn
				7 signe de composante y
				8 ans de composant y
			* /
			match [1] = match [1] .toLowerCase ();

			if (correspond à [1] .slice (0, 3) === "nth") {
				// nth- * nécessite un argument
				si (! match [3]) {
					Sizzle.error (match [0]);
				}

				// paramètres x et y numériques pour Expr.filter.CHILD
				// rappelez-vous que false / true convertit respectivement en 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "même" || match [3] === " impair "));
				match [5] = + ((match [7] + match [8]) || match [3] === "impair");

			// autres types interdisent les arguments
			} sinon si (correspond [3]) {
				Sizzle.error (match [0]);
			}

			revanche;
		},

		"PSEUDO": fonction (correspondance) {
			excès var,
				uncoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				return null;
			}

			// Accepte les arguments cités tels quels
			if (match [3]) {
				match [2] = match [4] || match [5] || "";

			// Supprime les caractères en excès des arguments sans guillemet
			} else if (non cité && rpseudo.test (non cité) &&
				// Récupère l'excès de tokenize (récursivement)
				(excès = tokenize (non cité, true)) &&
				// avance à la prochaine parenthèse fermante
				(excès = uncote.indexOf (")", uncote.length - un excès) - uncote.longueur)) {

				// l'excès est un index négatif
				match [0] = match [0] .slice (0, excès);
				match [2] = slice non coté (0, excès);
			}

			// Renvoie uniquement les captures nécessaires à la méthode de pseudo-filtre (type et argument)
			retour match.slice (0, 3);
		}
	},

	filtre: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			Renvoie nodeNameSelector === "*"?
				function () {retourne vrai; }:
				fonction (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			motif de retour ||
				(modèle = new RegExp ("(^ |" + espaces + ")" "+ nom de classe +" ("+ espaces +" | $) ")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "chaîne" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("classe") || "");
				});
		},

		"ATTR": fonction (nom, opérateur, contrôle) {
			fonction de retour (elem) {
				var result = Sizzle.attr (elem, name);

				if (résultat == null) {
					opérateur de retour === "! =";
				}
				si (! opérateur) {
					retourne vrai;
				}

				résultat + = "";

				opérateur de retour === "="? résultat === vérifier:
					opérateur === "! ="? résultat! == vérifier:
					opérateur === "^ ="? check && result.indexOf (check) === 0:
					opérateur === "* ="? check && result.indexOf (check)> -1:
					opérateur === "$ ="? check && result.slice (-check.length) === check:
					opérateur === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					opérateur === "| ="? résultat === vérifier || result.slice (0, check.length + 1) === check + "-":
					faux;
			};
		},

		"ENFANT": fonction (type, quoi, argument, premier, dernier) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "dernier",
				ofType = what === "of-type";

			retourne en premier === 1 && last === 0?

				// Raccourci pour: nth - * (n)
				fonction (elem) {
					return !! elem.parentNode;
				}:

				fonction (elem, context, xml) {
					cache var, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == en avant? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = faux;

					si (parent) {

						//: (first | last | only) - (enfant | de type)
						si (simple) {
							while (dir) {
								noeud = elem;
								while ((node ​​= node [dir])) {
									si (de Type?
										node.nodeName.toLowerCase () === nom:
										node.nodeType === 1) {

										retourne faux;
									}
								}
								// Inverse le sens pour: only- * (si ce n'est déjà fait)
								start = dir = type === "seulement" &&! start && "nextSibling";
							}
							retourne vrai;
						}

						commencer = [en avant? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) stocke les données de cache sur `parent`
						if (forward && useCache) {

							// Cherche `elem` à partir d'un index précédemment mis en cache

							// ... d'une manière conviviale avec gzip
							noeud = parent;
							outerCache = noeud [expando] || (node ​​[expando] = {});

							// Support: IE <9 seulement
							// Défendre contre les attractions clonées (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && noeud && noeud [dir] ||

								// retour à la recherche de `elem` depuis le début
								(diff = nodeIndex = 0) || start.pop ())) {

								// Une fois trouvé, cache les index sur `parent` et rompt
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									Pause;
								}
							}

						} autre {
							// Utilise l'index de l'élément précédemment mis en cache si disponible
							if (useCache) {
								// ... d'une manière conviviale avec gzip
								noeud = elem;
								outerCache = noeud [expando] || (node ​​[expando] = {});

								// Support: IE <9 seulement
								// Défendre contre les attractions clonées (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// ou: nième-dernier-enfant (...) ou: nième (-last)? - de type (...)
							if (diff === false) {
								// Utilise la même boucle que ci-dessus pour chercher `elem` depuis le début
								while ((node ​​= ++ nodeIndex && noeud && noeud [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									si ((deType?
										node.nodeName.toLowerCase () === nom:
										node.nodeType === 1) &&
										++ diff) {

										// Cache l'index de chaque élément rencontré
										if (useCache) {
											outerCache = noeud [expando] || (node ​​[expando] = {});

											// Support: IE <9 seulement
											// Défendre contre les attractions clonées (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (noeud === elem) {
											Pause;
										}
									}
								}
							}
						}

						// Incorporer le décalage, puis vérifier par rapport à la taille du cycle
						diff - = dernier;
						retourne diff === premier || (diff% first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": function (pseudo, argument) {
			// les pseudo-classes ne sont pas sensibles à la casse
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Donne la priorité à la casse si des pseudos personnalisés sont ajoutés avec des lettres majuscules
			// Rappelez-vous que setFilters hérite de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo non pris en charge:" + pseudo);

			// L'utilisateur peut utiliser createPseudo pour indiquer que
			// les arguments sont nécessaires pour créer la fonction de filtrage
			// tout comme Sizzle
			if (fn [expando]) {
				retourne fn (argument);
			}

			// Mais conserve le support des anciennes signatures
			si (longueur fn> 1) {
				args = [pseudo, pseudo, "", argument];
				renvoyer Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (fonction (graine, correspond)) {
						var idx,
							apparié = fn (graine, argument),
							i = matched.length;
						alors que je-- ) {
							idx = indexOf (valeur initiale, correspondante [i]);
							seed [idx] =! (correspond à [idx] = correspondant [i]);
						}
					}):
					fonction (elem) {
						retourne fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Pseudos potentiellement complexes
		"not": markFunction (fonction (sélecteur) {
			// Coupe le sélecteur passé à compiler
			// pour éviter de traiter le début et la fin
			// espaces en tant que combinateurs
			var input = [],
				résultats = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			retour matcher [expando]?
				markFunction (fonction (graine, correspondances, contexte, xml) {
					var elem
						unmatched = matcher (seed, null, xml, []),
						i = graine.longueur;

					// Correspond aux éléments sans correspondance de `matcher`
					alors que je-- ) {
						if ((elem = inégalé [i])) {
							graine [i] =! (correspond à [i] = elem);
						}
					}
				}):
				fonction (elem, context, xml) {
					entrée [0] = elem;
					matcher (input, null, xml, résultats);
					// Ne conserve pas l'élément (numéro 299)
					entrée [0] = null;
					return! results.pop ();
				};
		}),

		"a": markFunction (fonction (sélecteur) {
			fonction de retour (elem) {
				renvoyer Sizzle (sélecteur, elem) .length> 0;
			};
		}),

		"contient": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			fonction de retour (elem) {
				return (elem.textContent || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "si un élément est représenté par un sélecteur: lang ()
		// est basé uniquement sur la valeur de langue de l'élément
		// étant égal à l'identifiant C,
		// ou commençant par l'identifiant C immédiatement suivi de "-".
		// La correspondance de C avec la valeur de langue de l'élément est effectuée sans distinction de casse.
		// L'identifiant C ne doit pas obligatoirement être un nom de langue valide. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// la valeur de langue doit être un identifiant valide
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang non supporté:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			fonction de retour (elem) {
				var elemLang;
				faire {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retourne faux;
			};
		}),

		// Divers
		"cible": fonction (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			return elem === docElem;
		},

		"focus": fonction (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propriétés booléennes
		"enabled": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"vérifié": function (elem) {
			// En CSS3:: vérifié devrait retourner les éléments cochés et sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		},

		"sélectionné": function (elem) {
			// Accéder à cette propriété rend selected-by-default
			// les options dans Safari fonctionnent correctement
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contenu
		"empty": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: empty est annulé par l'élément (1) ou les nœuds de contenu (text: 3; cdata: 4; entity ref: 5),
			// mais pas par d'autres (commentaire: 8; instruction de traitement: 7; etc.)
			// nodeType <6 fonctionne car les attributs (2) n'apparaissent pas comme des enfants
			pour (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retourne faux;
				}
			}
			retourne vrai;
		},

		"parent": function (elem) {
			return! Expr.pseudos ["empty"] (elem);
		},

		// types d'élément / d'entrée
		"en-tête": function (elem) {
			return rheader.test (elem.nodeName);
		},

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		},

		"bouton": function (elem) {
			nom var = elem.nodeName.toLowerCase ();
			renvoyer le nom === "entrée" && elem.type === "bouton" || nom === "bouton";
		},

		"text": function (elem) {
			var attr;
			retourne elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Support: IE <8
				// Les nouvelles valeurs d'attribut HTML5 (par exemple, "search") apparaissent avec elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		},

		// Position dans la collection
		"premier": createPositionalPseudo (function () {
			return [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			retour [longueur - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argument) {
			retourne [argument <0? argument + longueur: argument];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"odd": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			pour (; i <longueur; i + = 2) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0?
				argument + longueur:
				argument> longueur?
					longueur:
					argument;
			pour (; --i> = 0;) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? argument + longueur: argument;
			pour (; ++ i <longueur;) {
				matchIndexes.push (i);
			}
			retourne matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Ajout de pseudos de type de saisie / type de saisie
pour (i dans {radio: true, case à cocher: true, fichier: true, mot de passe: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
pour (i dans {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API facile pour créer de nouveaux setFilters
fonction setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = fonction (sélecteur, parseOnly) {
	var apparié, match, jetons, type,
		soFar, groupes, pré-filtres,
		cached = tokenCache [sélecteur + ""];

	si (en cache) {
		retourne parseOnly? 0: cached.slice (0);
	}

	soFar = sélecteur;
	groupes = [];
	preFilters = Expr.preFilter;

	tandis que (soFar) {

		// Virgule et premier passage
		if (! matched || (match = rcomma.exec (soFar)))) {
			si (correspond) {
				// Ne consommez pas les virgules de fin comme valides
				soFar = soFar.slice (match [0] .length) || jusque là;
			}
			groupes.push ((jetons = []));
		}

		apparié = faux;

		// Combinateurs
		if ((match = rcombinators.exec (soFar)))) {
			apparié = match.shift ();
			tokens.push ({
				valeur: apparié,
				// Transpose les combinateurs descendants dans l'espace
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// filtres
		pour (tapez Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				apparié = match.shift ();
				tokens.push ({
					valeur: apparié,
					type: type,
					matchs: match
				});
				soFar = soFar.slice (matched.length);
			}
		}

		si (! correspondait) {
			Pause;
		}
	}

	// Retourne la longueur de l'excédent invalide
	// si nous sommes en train d'analyser
	// Sinon, génère une erreur ou retourne des jetons
	retourne parseOnly?
		soFar.length:
		jusque là ?
			Sizzle.error (selector):
			// Cache les jetons
			tokenCache (sélecteur, groupes) .slice (0);
};

fonction toSelector (jetons) {
	var i = 0,
		len = tokens.length,
		sélecteur = "";
	pour (; i <len; i ++) {
		sélecteur + = jetons [i] .value;
	}
	sélecteur de retour;
}

fonction addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		clé = sauter || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	retour combinator.first?
		// Vérifier avec l'ancêtre le plus proche / l'élément précédent
		fonction (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			retourne faux;
		}:

		// Vérifie tous les éléments ancêtres / précédents
		fonction (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Nous ne pouvons pas définir de données arbitraires sur des nœuds XML, ils ne bénéficient donc pas de la mise en cache de combinateurs
			si (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							retourne vrai;
						}
					}
				}
			} autre {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Support: IE <9 seulement
						// Défendre contre les attractions clonées (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [clé]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Assigne à newCache afin que les résultats se propagent dans les éléments précédents
							return (newCache [2] = oldCache [2]);
						} autre {
							// Réutilise newcache pour que les résultats se propagent dans les éléments précédents
							uniqueCache [clé] = newCache;

							// Une correspondance signifie que nous avons terminé. un échec signifie que nous devons continuer à vérifier
							if ((newCache [2] = matcher (elem, context, xml)))) {
								retourne vrai;
							}
						}
					}
				}
			}
			retourne faux;
		};
}

function elementMatcher (matchers) {
	renvoyer matchers.length> 1?
		fonction (elem, context, xml) {
			var i = matchers.length;
			alors que je-- ) {
				if (! matchers [i] (elem, context, xml)) {
					retourne faux;
				}
			}
			retourne vrai;
		}:
		correspondants [0];
}

function multipleContexts (sélecteur, contextes, résultats) {
	var i = 0,
		len = contexts.length;
	pour (; i <len; i ++) {
		Sizzle (sélecteur, contextes [i], résultats);
	}
	renvoyer les résultats;
}

fonction condenser (incomparable, carte, filtre, contexte, xml) {
	var elem
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mappé = carte! = null;

	pour (; i <len; i ++) {
		if ((elem = inégalé [i])) {
			if (! filtre || filtre (elem, contexte, xml)) {
				newUnmatched.push (elem);
				si (mappé) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

fonction setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	retourne markFunction (fonction (graine, résultats, contexte, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			préexistant = résultats.longueur,

			// Récupère les éléments initiaux de la graine ou du contexte
			elems = graine || multipleContexts (sélecteur || "*", context.nodeType? [context]: contexte, []),

			// Prefilter pour obtenir une entrée de matrice, en préservant une carte pour la synchronisation des résultats de départ
			matcherIn = preFilter && (seed ||! sélecteur)?
				condenser (elems, preMap, preFilter, context, xml):
				elems,

			matcherOut = matcher?
				// Si nous avons un postFinder, une graine filtrée, ou un postFilter non-graine ou des résultats préexistants,
				postFinder || (seed? preFilter: pré-existant || postFilter)?

					// ... le traitement intermédiaire est nécessaire
					[]:

					// ... sinon utiliser directement les résultats
					résultats :
				matcherIn;

		// Trouver des correspondances primaires
		si (matcher) {
			matcher (matcherIn, matcherOut, contexte, xml);
		}

		// Appliquer postFilter
		if (postFilter) {
			t emp = condenser (matcherOut, postMap);
			postFilter (temp, [], contexte, xml);

			// désassemble les éléments défaillants en les déplaçant vers matcherIn
			i = temp.length;
			alors que je-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		si (graine) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtient le dernier matcherOut en condensant cet intermédiaire dans les contextes postFinder
					temp = [];
					i = matcherOut.length;
					alors que je-- ) {
						if ((elem = matcherOut [i])) {
							// Restaure matcherIn puisque elem n'est pas encore un match final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Déplace les éléments correspondants de la graine aux résultats pour les maintenir synchronisés
				i = matcherOut.length;
				alors que je-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						graine [temp] =! (résultats [temp] = elem);
					}
				}
			}

		// Ajoute des éléments aux résultats, via postFinder si défini
		} autre {
			matcherOut = condenser (
				matcherOut === résultats?
					matcherOut.splice (préexistant, matcherOut.length):
					matcherOut
			)
			if (postFinder) {
				postFinder (null, résultats, matcherOut, xml);
			} autre {
				push.apply (résultats, matcherOut);
			}
		}
	});
}

fonction matcherFromTokens (jetons) {
	var checkContext, matcher, j,
		len = tokens.length,
		LeadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = LeadingRelative || Expr.relative [""],
		i = leaderRelative? dix,

		// L'assistant de création garantit que les éléments sont accessibles depuis le (s) contexte (s) de niveau supérieur.
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [fonction (elem, context, xml) {
			var ret = (! LeadingRelative && (xml || contexte! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Évitez de vous accrocher à un élément (numéro 299)
			checkContext = null;
			retour ret;
		}];

	pour (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type]))) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} autre {
			matcher = Expr.filter [jetons [i] .type] .apply (null, jetons [i] .matches);

			// Retour spécial après avoir vu un joueur de position
			if (matcher [expando]) {
				// Trouver le prochain opérateur relatif (le cas échéant) pour une manipulation correcte
				j = ++ i;
				pour (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						Pause;
					}
				}
				retourne setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si le jeton précédent était un combinateur descendant, insérez un * quelconque élément implicite
						tokens.slice (0, i - 1) .concat ({valeur: jetons [i - 2] .type === "??" ":" "})
					) .replace (rtrim, "$ 1"),
					matcher,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (jetons)
				)
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (matchers);
}

fonction matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (valeur de départ, contexte, XML, résultats, le plus à l'extérieur) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Nous devons toujours avoir des éléments de départ ou un contexte le plus externe
				elems = graine || byElement && Expr.find ["TAG"] ("*", le plus à l'extérieur),
				// Utilise integer dirruns si et seulement si c'est l'adaptateur le plus externe
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			si (le plus à l'extérieur) {
				outermostContext = context === document || contexte || le plus à l'extérieur;
			}

			// Ajoute des éléments en passant directement elementMatchers aux résultats
			// Assistance: IE <9, Safari
			// Tolérer les propriétés NodeList (IE: "length"; Safari: <nombre>) correspondant aux éléments par id
			pour (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, contexte || document, xml)) {
							résultats.push (elem);
							Pause;
						}
					}
					si (le plus à l'extérieur) {
						dirruns = dirrunsUnique;
					}
				}

				// Suivre les éléments sans correspondance pour les filtres définis
				if (bySet) {
					// Ils auront passé tous les matchs possibles
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Allonge le tableau pour chaque élément, correspondant ou non
					si (graine) {
						inégalée.push (elem);
					}
				}
			}

			// `i` est maintenant le nombre d'éléments visités ci-dessus et l'ajoute à` matchedCount`
			// rend le dernier non négatif.
			matchedCount + = i;

			// Appliquer les filtres définis aux éléments sans correspondance
			// NOTE: Ceci peut être ignoré s'il n'y a pas d'éléments non appariés (c'est-à-dire `matchedCount`
			// est égal à `i`), sauf si nous n'avons pas visité les éléments _any_ dans la boucle ci-dessus, car nous avons
			// pas d'élément matchers ni de graine.
			// Incrémenter une chaîne initiale "0" `i` permet à` i` de rester une chaîne uniquement dans cette
			// case, ce qui donnera un "00" `matchedCount` différent de` i` mais est également
			// numériquement zéro.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (unmatched, setMatched, context, xml);
				}

				si (graine) {
					// Réintègre les correspondances d'éléments pour éliminer le besoin de trier
					if (matchedCount> 0) {
						alors que je-- ) {
							if (! (sans correspondance [i] || setMatched [i]))) {
								setMatched [i] = pop.call (résultats);
							}
						}
					}

					// Ignorer les valeurs d'espace réservé pour l'index pour obtenir uniquement les correspondances réelles
					setMatched = condense (setMatched);
				}

				// Ajouter des résultats aux résultats
				push.apply (résultats, setMatched);

				// Les matchs définis sans pépins succédant à plusieurs interlocuteurs retenus stipulent le tri
				if (le plus externe &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (résultats);
				}
			}

			// Ignorer la manipulation des globals par des correspondants imbriqués
			si (le plus à l'extérieur) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retour inégalé;
		};

	retourner bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (sélecteur, correspondance / * à usage interne uniquement * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [sélecteur + ""];

	si (! mis en cache) {
		// Génère une fonction de fonctions récursives pouvant être utilisée pour vérifier chaque élément
		si (! match) {
			match = tokenize (sélecteur);
		}
		i = match.length;
		alors que je-- ) {
			cached = matcherFromTokens (match [i]);
			if (mis en cache [expando]) {
				setMatchers.push (mis en cache);
			} autre {
				elementMatchers.push (mis en cache);
			}
		}

		// Cache la fonction compilée
		cached = compilerCache (sélecteur, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Enregistrer le sélecteur et la tokenisation
		cached.selector = selector;
	}
	retour en cache;
};

/ **
 * Une fonction de sélection de bas niveau qui fonctionne avec la compilation de Sizzle
 * fonctions de sélection
 * @param {String | Function} selector Un sélecteur ou un fichier pré-compilé
 * fonction de sélecteur construite avec Sizzle.compile
 * @param {Element} contexte
 * @param {tableau} [résultats]
 * @param {Array} [seed] Un ensemble d'éléments à comparer
 * /
select = Sizzle.select = fonction (sélecteur, contexte, résultats, graine) {
	var i, jetons, jeton, type, trouver,
		compilé = sélecteur typeof === "fonction" & sélecteur,
		match =! seed && tokenize ((sélecteur = sélecteur compilé | sélecteur ||));

	résultats = résultats || [];

	// Essayez de minimiser les opérations s'il n'y a qu'un seul sélecteur dans la liste et pas de valeur de départ
	// (ce dernier nous garantit le contexte)
	if (match.length === 1) {

		// Réduit le contexte si le sélecteur composé principal est un ID
		jetons = correspondance [0] = correspondance [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			si (! contexte) {
				renvoyer les résultats;

			// Les correspondants pré-compilés vérifieront toujours l'ascendance, alors augmentez d'un niveau
			} sinon si (compilé) {
				context = context.parentNode;
			}

			sélecteur = sélecteur.slice (tokens.shift (). valeur.longueur);
		}

		// Récupère un ensemble de semences pour une correspondance de droite à gauche
		i = matchExpr ["needsContext"]. test (sélecteur)? 0: jetons.longueur;
		alors que je-- ) {
			jeton = jetons [i];

			// Abandonne si on frappe un combinateur
			if (Expr.relative [(type = token.type)])) {
				Pause;
			}
			if ((find = Expr.find [type])) {
				// Search, contexte élargi pour les principaux combinateurs frères
				si ((graine = trouver (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (jetons [0] .type) && testContext (context.parentNode) || le contexte
				))) {

					// Si la graine est vide ou qu'il ne reste plus de jetons, nous pouvons revenir plus tôt
					jetons.plice (i, 1);
					sélecteur = seed.length && toSelector (jetons);
					si (! sélecteur) {
						push.apply (résultats, graine);
						renvoyer les résultats;
					}

					Pause;
				}
			}
		}
	}

	// Compile et exécute une fonction de filtrage si aucune n'est fournie
	// Fournit `match` pour éviter la réutilisation si nous avons modifié le sélecteur ci-dessus
	(compilé || compile (sélecteur, correspondance)) (
		la graine,
		le contexte,
		! documentIsHTML,
		résultats,
		! context || rsibling.test (sélecteur) && testContext (context.parentNode) || le contexte
	)
	renvoyer les résultats;
};

// missions ponctuelles

// stabilité de tri
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Assistance: Chrome 14-35 +
// Assume toujours les doublons s'ils ne sont pas passés à la fonction de comparaison
support.detectDuplicates = !! hasDuplicate;

// Initialiser avec le document par défaut
setDocument ();

// Assistance: Kit Web <537.32 - Safari 6.0.3 / Chrome 25 (corrigé dans Chrome 27)
// Les nœuds détachés se suivent * de manière confuse
support.sortDetached = assert (fonction (el) {
	// Doit retourner 1, mais retourne 4 (suivant)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Support: IE <8
// Empêche l'attribut / la propriété "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
si (! assert (fonction (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("type | href | height | width", fonction (elem, name, isXML) {
		si (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Support: IE <9
// Utilise defaultValue à la place de getAttribute ("value")
if (! support.attributes ||! assert (fonction (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("valeur", "");
	return el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("value", fonction (elem, name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Support: IE <9
// Utilise getAttributeNode pour extraire des booléens lorsque getAttribute ment
si (! assert (fonction (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booléens, fonction (elem, name, isXML) {
		var val;
		si (! isXML) {
			renvoyer elem [nom] === vrai? name.toLowerCase ():
					(val = elem.getAttributeNode (name)) && val.specified?
					valeur.val:
				nul;
		}
	});
}

retournez Sizzle;

})( la fenêtre );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsolète
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = fonction (elem, dir, jusqu'à) {
	var apparié = [],
		tronquer = jusqu'à! == undefined;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (jusqu'à)) {
				Pause;
			}
			matched.push (elem);
		}
	}
	retour apparié;
};


var siblings = function (n, elem) {
	var apparié = [];

	pour (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	retour apparié;
};


var rneedsContext = jQuery.expr.match.needsContext;



fonction nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implémente la fonctionnalité identique pour filter et not
fonction winnow (éléments, qualificatif, pas) {
	if (isFunction (qualificatif)) {
		retourne jQuery.grep (éléments, fonction (elem, i) {
			return !! qualifier.call (elem, i, elem)! == pas;
		});
	}

	// élément unique
	if (qualifier.nodeType) {
		retourne jQuery.grep (elements, function (elem) {
			return (elem === qualifier)! == pas;
		});
	}

	// Nombre d'éléments (jQuery, arguments, Array)
	if (typeof qualifier! == "chaîne") {
		retourne jQuery.grep (elements, function (elem) {
			return (indexOf.call (qualificatif, elem)> -1)! == pas;
		});
	}

	// Filtré directement pour les sélecteurs simples et complexes
	renvoyer jQuery.filter (qualificateur, éléments, pas);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si non ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		renvoyer jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	retourne jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		renvoyer elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	trouver: fonction (sélecteur) {
		var i, ret,
			len = this.length,
			soi = ceci;

		if (typeof selector! == "string") {
			retourne this.pushStack (jQuery (selector) .filter (function () {
				pour (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						retourne vrai;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		pour (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		retourne len> 1? jQuery.uniqueSort (ret): ret;
	},
	filtre: fonction (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], false));
	},
	non: fonction (sélecteur) {
		return this.pushStack (winnow (this, sélecteur || [], true));
	},
	is: fonction (sélecteur) {
		retour !! winnow (
			ce,

			// S'il s'agit d'un sélecteur de position / relatif, vérifiez l'appartenance au jeu renvoyé.
			// donc $ ("p: premier"). is ("p: dernier") ne retournera pas vrai pour un document avec deux "p".
			typeof selector === "string" && rneedsContext.test (sélecteur)?
				jQuery (sélecteur):
				sélecteur || []
			faux
		).longueur;
	}
});


// Initialise un objet jQuery


// Une référence centrale à la racine jQuery (document)
var rootjQuery,

	// Un moyen simple de vérifier les chaînes HTML
	// Priorise #id sur <tag> pour éviter XSS via location.hash (# 9521)
	// Reconnaissance HTML stricte (# 11290: doit commencer par <)
	// Raccourci simple #id case pour la vitesse
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = fonction (sélecteur, contexte, racine) {
		var match, elem;

		// HANDLE: $ (""), $ (null), $ (indéfini), $ (false)
		si (! sélecteur) {
			retournez ceci;
		}

		// Méthode init () accepte un autre rootjQuery
		// donc migrate peut supporter jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Gère les chaînes HTML
		if (typeof selector === "string") {
			si (sélecteur [0] === "<" &&
				sélecteur [selector.length - 1] === ">" &&
				sélecteur.longueur> = 3) {

				// Supposons que les chaînes qui commencent et se terminent par <> soient du code HTML et ignorent la vérification de l'expression régulière
				match = [null, sélecteur, null];

			} autre {
				match = rquickExpr.exec (sélecteur);
			}

			// correspond au code HTML ou s'assure qu'aucun contexte n'est spécifié pour #id
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					context = instance de jQuery? contexte [0]: contexte;

					// L'option pour exécuter les scripts est vraie pour les back-compat
					// Laisse intentionnellement l'erreur être levée si parseHTML n'est pas présent
					jQuery.merge (this, jQuery.parseHTML (
						match [1],
						context && context.nodeType? context.ownerDocument || contexte: document,
						vrai
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						pour (match dans le contexte) {

							// Les propriétés du contexte sont appelées méthodes si possible
							if (isFunction (this [match])) {
								this [match] (context [match]);

							// ... et autrement défini comme attributs
							} autre {
								this.attr (match, context [match]);
							}
						}
					}

					retournez ceci;

				// HANDLE: $ (# id)
				} autre {
					elem = document.getElementById (match [2]);

					si (elem) {

						// Injecte l'élément directement dans l'objet jQuery
						this [0] = elem;
						this.length = 1;
					}
					retournez ceci;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexte || root) .find (sélecteur);

			// HANDLE: $ (expr, contexte)
			// (ce qui équivaut à: $ (context) .find (expr)
			} autre {
				Renvoie this.constructor (context) .find (sélecteur);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			ce [0] = sélecteur;
			this.length = 1;
			retournez ceci;

		// HANDLE: $ (fonction)
		// Raccourci pour document prêt
		} else if (isFunction (selector)) {
			retourne root.ready! == non défini?
				root.ready (sélecteur):

				// Exécuter immédiatement si ready n'est pas présent
				sélecteur (jQuery);
		}

		return jQuery.makeArray (sélecteur, ceci);
	};

// Donne à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialise la référence centrale
rootjQuery = jQuery (document);


var rparentsprev = / ^ (?: parents | prev (?: Jusqu'au | Tous)) /,

	// Méthodes garantissant la production d'un ensemble unique lors du démarrage d'un ensemble unique
	garantieUnique = {
		enfants: vrai,
		contenu: vrai,
		next: true,
		prev: true
	};

jQuery.fn.extend ({
	a: fonction (cible) {
		var cibles = jQuery (target, this),
			l = cibles.longueur;

		retourne this.filter (function () {
			var i = 0;
			pour (; i <l; i ++) {
				if (jQuery.contains (this, cibles [i]))) {
					retourne vrai;
				}
			}
		});
	},

	le plus proche: fonction (sélecteurs, contexte) {
		var cur,
			i = 0,
			l = this.length,
			apparié = [],
			cibles = typeof selectors! == "chaîne" && jQuery (sélecteurs);

		// Les sélecteurs de position ne correspondent jamais, car il n'y a pas de contexte _selection_
		if (! rneedsContext.test (sélecteurs)) {
			pour (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == contexte; cur = cur.parentNode) {

					// Toujours ignorer les fragments de document
					if (cur.nodeType <11 && (cibles?
						target.index (cur)> -1:

						// Ne pas passer les non-éléments à Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectors))) {

						matched.push (cur);
						Pause;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (matched): matched);
	},

	// Détermine la position d'un élément dans l'ensemble
	index: fonction (elem) {

		// Pas d'argument, retourne l'index dans le parent
		si (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Index dans le sélecteur
		if (typeof elem === "chaîne") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// Localiser la position de l'élément souhaité
		retourne indexOf.call (this,

			// S'il reçoit un objet jQuery, le premier élément est utilisé
			elem.jquery? elem [0]: elem
		)
	},

	add: fonction (sélecteur, contexte) {
		retourne this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (sélecteur, contexte))
			)
		)
	},

	addBack: fonction (sélecteur) {
		renvoyer this.add (sélecteur == null?
			this.prevObject: this.prevObject.filter (sélecteur)
		)
	}
});

fonction frère (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	retour cur;
}

jQuery.each ({
	parent: fonction (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? parent: null;
	},
	parents: fonction (elem) {
		return dir (elem, "parentNode");
	},
	parentsUntil: fonction (elem, i, jusqu'à) {
		return dir (elem, "parentNode", jusqu'à);
	},
	next: function (elem) {
		retour frère (elem, "nextSibling");
	},
	prev: function (elem) {
		retour frère (elem, "previousSibling");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, jusqu'à) {
		retour dir (elem, "nextSibling", jusqu'à);
	},
	prevUntil: function (elem, i, jusqu'à) {
		retour dir (elem, "previousSibling", jusqu'à);
	},
	frères et soeurs: function (elem) {
		retour des frères et soeurs ((elem.parentNode || {}) .firstChild, elem);
	},
	enfants: fonction (elem) {
		retour des frères et soeurs (elem.firstChild);
	},
	contenu: function (elem) {
		if (typeof elem.contentDocument! == "undefined") {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 uniquement, iOS 7 uniquement, navigateur Android <= 4.3 uniquement
		// Traite l'élément template comme un élément standard dans les navigateurs qui
		// ne le supporte pas.
		if (nodeName (elem, "template")) {
			elem = elem.content || elem;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, fonction (nom, fn) {
	jQuery.fn [nom] = fonction (jusqu'à, sélecteur) {
		var matched = jQuery.map (this, fn, jusqu'à);

		if (name.slice (-5)! == "Until") {
			sélecteur = jusqu'à;
		}

		if (sélecteur && typeof sélecteur === "chaîne") {
			apparié = jQuery.filter (sélecteur, apparié);
		}

		if (this.length> 1) {

			// Supprimer les doublons
			if (! guaranteeUnique [nom]) {
				jQuery.uniqueSort (correspondant);
			}

			// ordre inverse pour les parents * et les dérivés précédents
			if (rparentsprev.test (nom)) {
				apparié.reverse ();
			}
		}

		renvoyer this.pushStack (correspondant);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir les options au format String en celles au format Object
fonction createOptions (options) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], fonction (_, indicateur) {
		objet [drapeau] = vrai;
	});
	retourne un objet;
}

/ *
 * Créez une liste de rappel en utilisant les paramètres suivants:
 *
 * options: une liste optionnelle d’options séparées par des espaces qui changera la
 * la liste de rappel se comporte ou un objet d'option plus traditionnel
 *
 * Par défaut, une liste de rappel agit comme une liste de rappel d’événement et peut être
 * "tiré" plusieurs fois.
 *
 * Options possibles:
 *
 * une fois: s'assurera que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * memory: gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après le renvoi immédiat de la liste avec le dernier "mémorisé"
 * valeurs (comme un différé)
 *
 * unique: garantira qu'un rappel ne peut être ajouté qu'une seule fois (aucun doublon dans la liste)
 *
 * stopOnFalse: interrompre les appels lorsqu'un rappel renvoie false
 *
 * /
jQuery.Callbacks = function (options) {

	// Convertit les options du format String au format Object si nécessaire
	// (nous archivons d'abord dans le cache)
	options = typeof options === "chaîne"?
		createOptions (options):
		jQuery.extend ({}, options);

	var // Indicateur pour savoir si la liste est en cours de déclenchement
		cuisson,

		// Dernière valeur de tir pour les listes non oubliables
		Mémoire,

		// Indicateur pour savoir si la liste a déjà été déclenchée
		mis à la porte,

		// drapeau pour empêcher le tir
		fermé à clef,

		// liste de rappel actuelle
		list = [],

		// File d'attente de données d'exécution pour des listes répétables
		queue = [],

		// Index du rappel en cours d'activation (modifié par ajout / suppression si nécessaire)
		firingIndex = -1,

		// Rappels de tir
		feu = fonction () {

			// Impose le tir unique
			verrouillé = verrouillé || options.once;

			// Exécuter des callbacks pour toutes les exécutions en attente,
			// respect des remplacements firingIndex et des modifications d'exécution
			tiré = tirant = vrai;
			for (; queue.length; firingIndex = -1) {
				mémoire = queue.shift ();
				while (++ firingIndex <list.length) {

					// Exécuter le rappel et vérifier la fin anticipée
					if (list [firingIndex] .apply (mémoire [0], mémoire [1]) = == false &&
						options.stopOnFalse) {

						// Aller à la fin et oublier les données pour que .add ne se déclenche pas
						firingIndex = list.length;
						mémoire = faux;
					}
				}
			}

			// Oublie les données si on en a fini
			si (! options.memory) {
				mémoire = faux;
			}

			tir = faux;

			// Nettoie si nous avons fini de tirer pour de bon
			si (verrouillé) {

				// Garder une liste vide si nous avons des données pour les prochains appels d'ajout
				si (mémoire) {
					liste = [];

				// Sinon, cet objet est dépensé
				} autre {
					list = "";
				}
			}
		},

		// objet Callbacks réels
		self = {

			// Ajouter un rappel ou une collection de rappels à la liste
			ajouter: function () {
				si (liste) {

					// Si nous avons la mémoire d'une exécution passée, nous devrions tirer après avoir ajouté
					if (mémoire &&! tirant) {
						firingIndex = list.length - 1;
						queue.push (mémoire);
					}

					(fonction add (args) {
						jQuery.each (arguments, fonction (_, arguments) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "chaîne") {

								// Inspecter récursivement
								ajouter (arg);
							}
						});
					} )( arguments );

					if (mémoire &&! tirant) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Supprimer un rappel de la liste
			remove: function () {
				jQuery.each (arguments, fonction (_, arg) {
					indice var;
					while ((index = jQuery.inArray (arg, liste, index)))> -1) {
						list.splice (index, 1);

						// Gérer les index de tir
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				retournez ceci;
			},

			// Vérifie si un rappel donné est dans la liste.
			// Si aucun argument n'est fourni, indique si des rappels sont attachés à la liste.
			a: fonction (fn) {
				retourner fn?
					jQuery.inArray (fn, list)> -1:
					liste.longueur> 0;
			},

			// Supprimer tous les rappels de la liste
			vide: function () {
				si (liste) {
					liste = [];
				}
				retournez ceci;
			},

			// Désactive .fire et .add
			// Abandonne les exécutions en cours / en attente
			// Effacer tous les rappels et toutes les valeurs
			désactiver: function () {
				verrouillé = file d'attente = [];
				liste = mémoire = "";
				retournez ceci;
			},
			désactivé: function () {
				return! list;
			},

			// Désactive .fire
			// Désactive également .add sauf si nous avons de la mémoire (car cela n'aurait aucun effet)
			// Abandonne les exécutions en attente
			verrouiller: fonction () {
				verrouillé = file d'attente = [];
				si (! memory &&! tir) {
					liste = mémoire = "";
				}
				retournez ceci;
			},
			verrouillé: function () {
				retour !! verrouillé;
			},

			// Appelle tous les callbacks avec le contexte et les arguments donnés
			fireWith: fonction (contexte, arguments) {
				si (! verrouillé) {
					args = args || [];
					args = [contexte, args.slice? args.slice (): args];
					queue.push (args);
					si (! tirant) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Appelle tous les callbacks avec les arguments donnés
			feu: fonction () {
				self.fireWith (this, arguments);
				retournez ceci;
			},

			// Pour savoir si les callbacks ont déjà été appelés au moins une fois
			tiré: function () {
				retour !! viré;
			}
		};

	retourner soi-même;
};


fonction Identité (v) {
	retourner v;
}
fonction Thrower (ex) {
	lancer ex;
}

function adoptValue (valeur, résoudre, rejeter, noValue) {
	méthode var;

	essayer {

		// Vérifie d'abord l'aspect de la promesse pour privilégier le comportement synchrone
		if (value && isFunction ((method = value.promise)))) {
			method.call (valeur) .done (résolution) .fail (rejeter);

		// Autres alorsables
		} else if (valeur && isFunction ((method = valeur.then)))) {
			method.call (valeur, résoudre, rejeter);

		// Autres non-thenables
		} autre {

			// Contrôlez les arguments `résoudre` en laissant Array # slice transtyper le booléen` noValue` en entier:
			// * false: [valeur] .slice (0) => resol (valeur)
			// * true: [valeur] .slice (1) => resol ()
			resolve.apply (undefined, [valeur] .slice (noValue));
		}

	// Pour Promises / A +, convertit les exceptions en rejets
	// Depuis jQuery.when ne déballe pas thenables, nous pouvons ignorer les vérifications supplémentaires apparaissant dans
	// Deferred # then pour supprimer conditionnellement le rejet.
	} capture (valeur) {

		// Support: Android 4.0 uniquement
		// Les fonctions en mode strict appelées sans .call / .apply obtiennent le contexte d'objet global
		rejeter.apply (indéfini, [valeur]);
	}
}

jQuery.extend ({

	Différé: function (func) {
		var tuples = [

				// action, ajouter un auditeur, rappels,
				// ... .alors gestionnaires, index d'argument, [état final]
				["notify", "progress", jQuery.Callbacks ("mémoire"),
					jQuery.Callbacks ("memory"), 2],
				["résoudre", "fait", jQuery.Callbacks ("une fois en mémoire"),
					jQuery.Callbacks ("une fois en mémoire"), 0, "résolu"],
				["rejette", "échoue", jQuery.Callbacks ("une fois en mémoire"),
					jQuery.Callbacks ("une fois en mémoire"), 1, "rejeté"
			],
			state = "en attente",
			promesse = {
				fonction d'état() {
					état de retour;
				},
				toujours: function () {
					deferred.done (arguments) .fail (arguments);
					retournez ceci;
				},
				"catch": function (fn) {
					retourne promesse.then (null, fn);
				},

				// Garder le tuyau pour le dos-compat
				pipe: fonction (/ * fnDone, fnFail, fnProgress * /) {
					var fns = arguments;

					retourne jQuery.Deferred (function (newDefer) {
						jQuery.each (tuples, fonction (i, tuple) {

							// Mappe des nuplets (progression, terminé, échec) en arguments (terminé, échec, progression)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {lie à newDefer ou newDefer.notify})
							// deferred.done (function () {lie à newDefer ou newDefer.resolve})
							// deferred.fail (function () {lie à newDefer ou newDefer.reject})
							différé [tuple [1]] (function () {
								var retourné = fn && fn.apply (this, arguments);
								if (retourné && isFunction (retourné.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} autre {
									newDefer [tuple [0] + "With"] (
										ce,
										fn? [retourné]: arguments
									)
								}
							});
						});
						fns = null;
					} ).promettre();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					résolution de la fonction (profondeur, différé, gestionnaire, spécial) {
						fonction de retour () {
							var que = ceci,
								args = arguments,
								mightThrow = function () {
									var revint alors;

									// Support: Promises / A + section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorer les tentatives de résolution double
									si (profondeur <profondeur max.) {
										revenir;
									}

									return = handler.apply (that, args);

									// Support: Promises / A + section 2.3.1
									// https://promisesaplus.com/#point-48
									if (retourné === deferred.promise ()) {
										jetez un nouveau TypeError ("résolution automatique puis");
									}

									// Support: Promises / sections A + 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Récupère `then` une seule fois
									then = retourné &&

										// Support: Promises / A + section 2.3.4
										// https://promisesaplus.com/#point-64
										// Vérifie que les objets et les fonctions ne sont pas compatibles
										(typeof retourné === "objet" ||
											typeof retourné === "fonction") &&
										retourné.alors;

									// Gère un thenable retourné
									if (isFunction (then)) {

										// Processeurs spéciaux (notifier) ​​il suffit d'attendre la résolution
										si (spécial) {
											then.call (
												revenu,
												résoudre (maxDepth, différé, identité, spécial),
												résoudre (maxDepth, différé, Thrower, spécial)
											)

										// Les processeurs normaux (résoudre) accrochent également en cours
										} autre {

											// ... et ignorer les anciennes valeurs de résolution
											maxDepth ++;

											then.call (
												revenu,
												résoudre (maxDepth, différé, identité, spécial),
												résoudre (maxDepth, différé, Thrower, spécial),
												résoudre (maxDepth, différé, identité,
													deferred.notifyWith)
											)
										}

									// Gère toutes les autres valeurs retournées
									} autre {

										// Seuls les gestionnaires de substitution transmettent le contexte
										// et valeurs multiples (comportement non-spec)
										if (gestionnaire! == Identity) {
											cela = non défini;
											args = [retourné];
										}

										// Traite la ou les valeurs
										// Le processus par défaut est résolu
										(special || deferred.resolveWith) (that, args);
									}
								},

								// Uniquement les processeurs normaux (résoudre) interceptent et rejettent les exceptions
								processus = spécial?
									mightThrow:
									une fonction() {
										essayer {
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Support: Promises / A + section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorer les exceptions post-résolution
											si (profondeur + 1> = profondeur maximale) {

												// Seuls les gestionnaires de substitution transmettent le contexte
												// et valeurs multiples (comportement non-spec)
												if (gestionnaire! == Thrower) {
													cela = non défini;
													args = [e];
												}

												deferred.rejectWith (que, arguments);
											}
										}
									};

							// Support: Promises / A + section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-résoudre les promesses d'esquiver immédiatement le faux rejet
							// erreurs ultérieures
							si (profondeur) {
								processus();
							} autre {

								// Appelez un hook optionnel pour enregistrer la pile, en cas d'exception
								// puisqu'il est autrement perdu lorsque l'exécution devient asynchrone
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (processus);
							}
						};
					}

					retourne jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuples [0] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onProgress)?
									onProgress:
									Identité,
								newDefer.notifyWith
							)
						)

						// accomplies_handlers.add (...)
						tuples [1] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identité
							)
						)

						// rejeté_handlers.add (...)
						tuples [2] [3] .add (
							résoudre(
								0
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Lanceur
							)
						)
					} ).promettre();
				},

				// Obtenir une promesse pour ce différé
				// Si obj est fourni, l'aspect promesse est ajouté à l'objet.
				promesse: fonction (obj) {
					return obj! = null? jQuery.extend (obj, promesse): promesse;
				}
			},
			différé = {};

		// Ajout de méthodes spécifiques à la liste
		jQuery.each (tuples, fonction (i, tuple) {
			var liste = tuple [2],
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promesse [tuple [1]] = list.add;

			// Etat de la poignée
			if (stateString) {
				list.add (
					une fonction() {

						// state = "résolu" (c'est-à-dire rempli)
						// state = "rejeté"
						state = stateString;
					},

					// denied_callbacks.disable
					// satisfilled_callbacks.disable
					tuples [3 - i] [2] .disable,

					// denied_handlers.disable
					// accomplies_handlers.disable
					tuples [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuples [0] [2] .lock,

					// progress_handlers.lock
					tuples [0] [3] .lock
				)
			}

			// progress_handlers.fire
			// accomplies_handlers.fire
			// rejetés_fichiers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			différé [tuple [0]] = fonction () {
				différé [tuple [0] + "avec"] (this === différé? undefined: this, arguments);
				retournez ceci;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			différé [tuple [0] + "avec"] = list.fireWith;
		});

		// Faire le promis une promesse
		promesse.promise (reportée);

		// appel donné func le cas échéant
		si (func) {
			func.call (différé, différé);
		}

		// Terminé!
		retour différé;
	},

	// Assistant différé
	quand: fonction (valeur unique) {
		var

			// nombre de subordonnés inachevés
			restant = arguments.length,

			// nombre d'arguments non traités
			i = restant,

			// données d'exécution subordonnées
			resolContexts = Tableau (i),
			resolValues ​​= slice.call (arguments),

			// le maître différé
			master = jQuery.Deferred (),

			// fabrique de rappel subordonnée
			updateFunc = function (i) {
				fonction de retour (valeur) {
					resolutionContexts [i] = this;
					resolValues ​​[i] = arguments.length> 1? slice.call (arguments): valeur;
					si (! (- restant)) {
						master.resolveWith (resolContexts, resolValues);
					}
				};
			};

		// Les arguments simples et vides sont adoptés comme Promise.resolve
		si (restant <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restant );

			// Utilise .then () pour décompresser les objets secondaires (cf. gh-3000)
			if (master.state () === "en attente" ||
				isFunction (resolValues ​​[i] && resolValues ​​[i] .then)) {

				renvoyer master.then ();
			}
		}

		// Plusieurs arguments sont agrégés comme les éléments du tableau Promise.all
		alors que je-- ) {
			adoptValue (resolValues ​​[i], updateFunc (i), master.reject);
		}

		renvoyer master.promise ();
	}
});


// Ceci indique généralement une erreur du programmeur pendant le développement,
// préviens à leur sujet dès que possible plutôt que de les avaler par défaut.
var rerrorNames = / ^ (Eval | Internal | Range | Référence | Syntaxe | Type | URI) Erreur $ /;

jQuery.Deferred.exceptionHook = fonction (erreur, pile) {

	// Support: IE 8 - 9 seulement
	// La console existe lorsque les outils de développement sont ouverts, ce qui peut arriver à tout moment
	if (window.console && window.console.warn && erreur && rerrorNames.test (error.name)) {
		window.console.warn ("exception jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		erreur de lancer;
	});
};




// Le différé utilisé sur le DOM prêt
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.alors (fn)

		// Wrap jQuery.readyException dans une fonction afin que la recherche
		// se produit au moment de la gestion des erreurs au lieu du rappel
		// enregistrement.
		.catch (fonction (erreur) {
			jQuery.readyException (error);
		});

	retournez ceci;
};

jQuery.extend ({

	// Le DOM est-il prêt à être utilisé? Défini sur true une fois que cela se produit.
	isReady: false,

	// Un compteur pour suivre le nombre d'éléments à attendre avant
	// l'événement ready est déclenché. Voir n ° 6781
	prêt Attendez: 1,

	// Gère quand le DOM est prêt
	prêt: fonction (attendez) {

		// Abandonne s'il y a des suspensions en attente ou si nous sommes déjà prêts
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			revenir;
		}

		// Rappelez-vous que le DOM est prêt
		jQuery.isReady = true;

		// Si un événement DOM Ready normal est déclenché, décrémentez et attendez si besoin est
		if (attendez! == true && --jQuery.readyWait> 0) {
			revenir;
		}

		// S'il y a des fonctions liées, à exécuter
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// Le gestionnaire d'événement ready et la méthode d'auto-nettoyage
fonction terminée () {
	document.removeEventListener ("DOMContentLoaded", terminé);
	window.removeEventListener ("load", terminé);
	jQuery.ready ();
}

// Attrape les cas où $ (document) .ready () est appelé
// après l'événement de navigateur a déjà eu lieu.
// Support: IE <= 9 - 10 seulement
// Le vieil IE signale parfois "interactif" trop tôt
if (document.readyState === "complete" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// le manipule de manière asynchrone pour permettre aux scripts de se préparer au retard
	window.setTimeout (jQuery.ready);

} autre {

	// Utiliser le rappel d'événement pratique
	document.addEventListener ("DOMContentLoaded", terminé);

	// Un repli sur window.onload, qui fonctionnera toujours
	window.addEventListener ("load", terminé);
}




// Méthode multifonctionnelle pour obtenir et définir les valeurs d'une collection
// La valeur / s peut éventuellement être exécutée s'il s'agit d'une fonction
var access = function (elems, fn, clé, valeur, chaînable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = clé == null;

	// Définit de nombreuses valeurs
	if (toType (key) === "object") {
		chainable = true;
		pour (i en clé) {
			accès (elems, fn, i, clé [i], true, emptyGet, raw);
		}

	// Définit une valeur
	} else if (valeur! == non définie) {
		chainable = true;

		if (! isFunction (valeur)) {
			brut = vrai;
		}

		si (en vrac) {

			// Les opérations en bloc sont exécutées sur l'ensemble
			si (brut) {
				fn.call (elems, value);
				fn = null;

			// ... sauf lors de l'exécution des valeurs de fonction
			} autre {
				en vrac = fn;
				fn = fonction (elem, clé, valeur) {
					return bulk.call (jQuery (elem), valeur);
				};
			}
		}

		si (fn) {
			pour (; i <len; i ++) {
				fn (
					elems [i], clé, brut?
					valeur :
					value.call (elems [i], i, fn (elems [i], clé))
				)
			}
		}
	}

	si (chaînable) {
		renvoyer les elems;
	}

	// Obtient
	si (en vrac) {
		retourne fn.call (elems);
	}

	retourner len? fn (elems [0], clé): emptyGet;
};


// Correspond à la chaîne en pointillés pour caméliser
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Utilisé par camelCase comme callback pour replace ()
fonction fcamelCase (tout, lettre) {
	return letter.toUpperCase ();
}

// Converti en pointillé en camelCase; utilisé par les modules css et data
// Support: IE <= 9 - 11, Edge 12 - 15
// Microsoft a oublié de bosse son préfixe de vendeur (# 9572)
fonction camelCase (chaîne) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = fonction (propriétaire) {

	// Accepte seulement:
	// - Noeud
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objet
	// - Tout
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




fonction Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: fonction (propriétaire) {

		// Vérifier si l'objet propriétaire a déjà un cache
		valeur var = propriétaire [this.expando];

		// Si non, en créer un
		si (! valeur) {
			valeur = {};

			// Nous pouvons accepter les données pour les nœuds non-éléments dans les navigateurs modernes,
			// mais nous ne devrions pas, voir # 8335.
			// retourne toujours un objet vide.
			if (acceptData (propriétaire)) {

				// S'il s'agit d'un noeud peu susceptible d'être enchaîné ou bouclé
				// utilise une affectation simple
				if (owner.nodeType) {
					propriétaire [this.expando] = valeur;

				// sinon le sécuriser dans une propriété non énumérable
				// configurable doit être true pour permettre à la propriété d'être
				// supprimé lorsque les données sont supprimées
				} autre {
					Object.defineProperty (propriétaire, this.expando, {
						valeur: valeur,
						configurable: true
					});
				}
			}
		}

		valeur de retour;
	},
	set: fonction (propriétaire, données, valeur) {
		var prop,
			cache = this.cache (propriétaire);

		// Handle: [propriétaire, clé, valeur] args
		// Toujours utiliser la clé camelCase (gh-2257)
		if (typeof data === "chaîne") {
			cache [camelCase (data)] = valeur;

		// Handle: [propriétaire, {propriétés}] args
		} autre {

			// Copie les propriétés une par une dans l'objet cache
			pour (prop dans les données) {
				cache [camelCase (prop)] = data [prop];
			}
		}
		retourner le cache;
	},
	get: fonction (propriétaire, clé) {
		touche retour === non définie?
			this.cache (propriétaire):

			// Toujours utiliser la clé camelCase (gh-2257)
			propriétaire [this.expando] && propriétaire [this.expando] [camelCase (clé)];
	},
	access: fonction (propriétaire, clé, valeur) {

		// Dans les cas où:
		//
		// 1. Aucune clé n'a été spécifiée
		// 2. Une clé de chaîne a été spécifiée, mais aucune valeur fournie
		//
		// Prend le chemin "read" et permet à la méthode get de déterminer
		// quelle valeur renvoyer, respectivement soit:
		//
		// 1. L'objet de cache entier
		// 2. Les données stockées à la clé
		//
		si (clé === non défini ||
				((clé && typeof clé === "chaîne") && valeur === non définie)) {

			return this.get (propriétaire, clé);
		}

		// Lorsque la clé n'est pas une chaîne, ou à la fois une clé et une valeur
		// sont spécifiés, définis ou étendus (objets existants) avec:
		//
		// 1. Un objet de propriétés
		// 2. Une clé et une valeur
		//
		this.set (propriétaire, clé, valeur);

		// Le chemin "set" pouvant avoir deux points d'entrée possibles
		// retourne les données attendues en fonction du chemin emprunté [*]
		valeur de retour! == non défini? valeur: clé;
	},
	remove: fonction (propriétaire, clé) {
		var i,
			cache = propriétaire [this.expando];

		if (cache === non défini) {
			revenir;
		}

		si (clé! == non défini) {

			// Supporte un tableau ou une chaîne de clés séparée par des espaces
			if (Array.isArray (key)) {

				// Si key est un tableau de clés ...
				// Nous définissons toujours les clés camelCase, alors supprimez-le.
				key = key.map (camelCase);
			} autre {
				key = camelCase (clé);

				// Si une clé avec les espaces existe, utilisez-la.
				// Sinon, créez un tableau en faisant correspondre des espaces non blancs
				clé = clé en cache?
					[clé]:
					(key.match (rnothtmlwhite) || []);
			}

			i = clé.longueur;

			alors que je-- ) {
				supprimer le cache [clé [i]];
			}
		}

		// Supprime le expando s'il n'y a plus de données
		if (key === undefined || jQuery.isEmptyObject (cache)) {

			// Assistance: Chrome <= 35 - 45
			// Les performances de Webkit & Blink en souffrent lors de la suppression de propriétés
			// depuis les noeuds DOM, définissez donc non défini à la place
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restreint)
			if (owner.nodeType) {
				propriétaire [this.expando] = undefined;
			} autre {
				supprimer le propriétaire [this.expando];
			}
		}
	},
	hasData: fonction (propriétaire) {
		var cache = propriétaire [this.expando];
		retour cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Résumé d'implémentation
//
// 1. Appliquer la compatibilité de surface et sémantique de l'API avec la branche 1.9.x
// 2. Améliorer la maintenabilité du module en réduisant le stockage
// chemins vers un mécanisme unique.
// 3. Utilisez le même mécanisme pour prendre en charge les données "privées" et "utilisateur".
// 4. _Never_ exposer des données "privées" au code utilisateur (TODO: Drop _data, _removeData)
// 5. Évitez d'exposer les détails d'implémentation sur les objets utilisateur (par exemple, les propriétés expando)
// 6. Fournissez un chemin clair pour la mise à niveau de l'implémentation vers WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

fonction getData (data) {
	if (data === "true") {
		retourne vrai;
	}

	if (data === "false") {
		retourne faux;
	}

	if (data === "null") {
		return null;
	}

	// Convertit uniquement en nombre s'il ne modifie pas la chaîne
	if (data === + data + "") {
		retourne + données;
	}

	if (rbrace.test (data)) {
		retourne JSON.parse (data);
	}

	renvoyer des données;
}

fonction dataAttr (elem, key, data) {
	nom var;

	// Si rien n'a été trouvé en interne, essayez d'en récupérer
	// données de l'attribut HTML5 data- *
	if (data === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (name);

		if (typeof data === "chaîne") {
			essayer {
				data = getData (data);
			} catch (e) {}

			// Assurez-vous que nous avons défini les données afin qu'elles ne soient pas modifiées ultérieurement
			dataUser.set (elem, key, data);
		} autre {
			données = non défini;
		}
	}
	renvoyer des données;
}

jQuery.extend ({
	hasData: function (elem) {
		Renvoie dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	data: fonction (elem, name, data) {
		renvoyer dataUser.access (elem, name, data);
	},

	removeData: fonction (elem, name) {
		dataUser.remove (elem, name);
	},

	// TODO: Maintenant que tous les appels à _data et _removeData ont été remplacés
	// avec des appels directs aux méthodes dataPriv, celles-ci peuvent être obsolètes.
	_data: fonction (elem, name, data) {
		renvoyer dataPriv.access (elem, name, data);
	},

	_removeData: fonction (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	data: fonction (clé, valeur) {
		var i, nom, données,
			elem = this [0],
			attrs = elem && elem.attributes;

		// Obtient toutes les valeurs
		if (clé === non défini) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					alors que je-- ) {

						// Support: IE 11 uniquement
						// Les éléments attrs peuvent être nuls (# 14894)
						si (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, name, data [nom]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			renvoyer des données;
		}

		// Définit plusieurs valeurs
		if (typeof key === "object") {
			retourne this.each (function () {
				dataUser.set (this, clé);
			});
		}

		retourne l'accès (this, function (value) {
			données var;

			// L'objet jQuery appelant (les correspondances d'élément) n'est pas vide
			// (et a donc un élément apparaît à ce [0]) et le
			// Le paramètre `value` n'était pas indéfini. Un objet jQuery vide
			// aboutira à undefined pour elem = this [0] qui
			// lance une exception si une tentative de lecture d'un cache de données est effectuée.
			if (elem && valeur === non défini) {

				// Tentative d'obtenir des données du cache
				// La clé sera toujours camelCased in Data
				data = dataUser.get (elem, key);
				if (data! == non défini) {
					renvoyer des données;
				}

				// Essayer de "découvrir" les données dans
				// données personnalisées HTML5 - * attrs
				data = dataAttr (elem, key);
				if (data! == non défini) {
					renvoyer des données;
				}

				// Nous avons vraiment essayé, mais les données n'existent pas.
				revenir;
			}

			// Définir les données ...
			this.each (function () {

				// nous stockons toujours la clé camelCased
				dataUser.set (this, clé, valeur);
			});
		}, null, valeur, arguments.length> 1, null, true);
	},

	removeData: fonction (clé) {
		retourne this.each (function () {
			dataUser.remove (this, clé);
		});
	}
});


jQuery.extend ({
	file d'attente: fonction (elem, type, data) {
		file d'attente var;

		si (elem) {
			type = (type || "fx") + "file d'attente";
			queue = dataPriv.get (elem, type);

			// Accélère le retrait de la file d'attente en sortant rapidement s'il ne s'agit que d'une recherche
			si (données) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} autre {
					queue.push (données);
				}
			}
			file d'attente de retour || [];
		}
	},

	dequeue: function (elem, type) {
		type = type || "fx";

		file d'attente var = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			next = function () {
				jQuery.dequeue (elem, type);
			};

		// Si la file d'attente fx est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Ajoute une sentinelle de progression pour empêcher la file d'attente de fx d'être
			// automatiquement retiré de la file d'attente
			if (type === "fx") {
				queue.unshift ("inprogress");
			}

			// Efface la dernière fonction d'arrêt de la file d'attente
			supprimer les hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// non public - génère un objet queueHooks ou renvoie l'objet actuel
	_queueHooks: function (elem, type) {
		clé var = type + "queueHooks";
		retourne dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			empty: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [type + "file d'attente", clé]);
			})
		});
	}
});

jQuery.fn.extend ({
	file d'attente: fonction (type, données) {
		var setter = 2;

		if (typeof type! == "chaîne") {
			data = type;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (this [0], type);
		}

		renvoyer des données === non défini?
			ce :
			this.each (function () {
				file d'attente var = jQuery.queue (this, type, data);

				// Assure un hook pour cette file d'attente
				jQuery._queueHooks (this, type);

				if (tapez === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	},
	dequeue: function (type) {
		retourne this.each (function () {
			jQuery.dequeue (this, type);
		});
	},
	clearQueue: fonction (type) {
		return this.queue (type || "fx", []);
	},

	// Obtenir une promesse résolue lorsque les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse: fonction (type, obj) {
		var tmp,
			compte = 1,
			defer = jQuery.Deferred (),
			éléments = ceci,
			i = this.length,
			resolver = fonction () {
				si (! (--count)) {
					defer.resolveWith (elements, [elements]);
				}
			};

		if (typeof type! == "chaîne") {
			obj = type;
			type = non défini;
		}
		type = type || "fx";

		alors que je-- ) {
			tmp = dataPriv.get (éléments [i], tapez + "queueHooks");
			if (tmp && tmp.empty) {
				compter ++;
				tmp.empty.add (résoudre);
			}
		}
		résoudre();
		retour différé.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Haut", "Droite", "Bas", "Gauche"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		composé = {composé: vrai};

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 uniquement
	// Vérifier l'attachement au-delà des limites du DOM fantôme lorsque cela est possible (gh-3504)
	// Support: iOS 10.0-10.2 uniquement
	// Les premières versions d'iOS 10 supportaient `attachShadow` mais pas` getRootNode`,
	// conduisant à des erreurs. Nous devons vérifier `getRootNode`.
	if (documentElement.getRootNode) {
		isAttached = function (elem) {
			retourne jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (compose) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = fonction (elem, el) {

		// isHiddenWithinTree peut être appelé à partir de jQuery # filter function;
		// dans ce cas, l'élément sera le deuxième argument
		elem = el || elem;

		// Le style en ligne l'emporte sur tous
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Sinon, vérifie le style calculé
			// Assistance: Firefox <= 43 - 45
			// Les éléments déconnectés peuvent avoir un affichage calculé: aucun, alors vérifiez d'abord que elem est
			// dans le document.
			isAttached (elem) &&

			jQuery.css (elem, "display") === "aucun";
	};

var swap = function (elem, options, rappel, args) {
	var ret, nom,
		ancien = {};

	// Mémorise les anciennes valeurs et insère les nouvelles
	pour (nom dans les options) {
		ancien [nom] = elem.style [nom];
		elem.style [name] = options [name];
	}

	ret = callback.apply (elem, args || []);

	// Rétablir les anciennes valeurs
	pour (nom dans les options) {
		elem.style [nom] = ancien [nom];
	}

	retour ret;
};




fonction adjustCSS (elem, prop, valueParts, tween) {
	var ajusté, échelle,
		maxIterations = 20,
		currentValue = tween?
			une fonction() {
				renvoyer tween.cur ();
			}:
			une fonction() {
				retourne jQuery.css (elem, prop, "");
			},
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Le calcul de la valeur de départ est requis pour les inadéquations d'unités potentielles
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unit! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unité) {

		// Support: Firefox <= 54
		// Réduit de moitié la valeur cible d'itération pour éviter les interférences provenant des limites supérieures de CSS (gh-2144)
		initiale = initiale / 2;

		// Unités de confiance déclarées par jQuery.css
		unité = unité || initialInUnit [3];

		// Itérativement approximatif à partir d'un point de départ différent de zéro
		initialInUnit = + initial || 1;

		tandis que (maxIterations--) {

			// Évalue et met à jour notre meilleure estimation (doubler suppose que zéro).
			// Terminer si l'échelle est égale ou croisée à 1 (rendant l'ancien * nouveau produit non positif).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Assurez-vous de mettre à jour les propriétés d'interpolation ultérieurement
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + initiale || 0;

		// Appliquer un décalage relatif (+ = / - =) si spécifié
		ajusté = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		si (interpolé) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = ajusté;
		}
	}
	retour ajusté;
}


var defaultDisplayMap = {};

fonction getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [NomNoeud];

	si (afficher) {
		retourner l'affichage;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		display = "block";
	}
	defaultDisplayMap [NomNoeud] = display;

	retourner l'affichage;
}

fonction showHide (elements, show) {
	affichage var, elem,
		valeurs = [],
		indice = 0,
		longueur = éléments.longueur;

	// Déterminer une nouvelle valeur d'affichage pour les éléments devant être modifiés
	pour (; index <longueur; index ++) {
		elem = elements [index];
		si (! elem.style) {
			continuer;
		}

		display = elem.style.display;
		si (afficher) {

			// Puisque nous forçons la visibilité sur les éléments cachés en cascade, un effet immédiat (et lent)
			// check est requis dans cette première boucle sauf si nous avons une valeur d'affichage non vide (soit
			// en ligne ou sur le point d'être restauré)
			if (display === "none") {
				valeurs [index] = dataPriv.get (elem, "display") || nul;
				if (! values ​​[index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valeurs [index] = getDefaultDisplay (elem);
			}
		} autre {
			if (display! == "none") {
				valeurs [index] = "none";

				// Souviens-toi de ce que nous sommes en train d'écraser
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Définit l'affichage des éléments dans une seconde boucle pour éviter une refusion constante
	pour (index = 0; index <longueur; index ++) {
		if (valeurs [index]! = null) {
			éléments [index] .style.display = values ​​[index];
		}
	}

	éléments de retour;
}

jQuery.fn.extend ({
	show: function () {
		retourne showHide (this, true);
	},
	masquer: function () {
		retournez showHide (this);
	},
	bascule: fonction (état) {
		if (typeof state === "boolean") {
			état de retour? this.show (): this.hide ();
		}

		retourne this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} autre {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: case à cocher | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) / i);

var rscriptType = (/ ^ $ | ^ module $ | \ / (?: java | ecma) script / i);



// Nous devons fermer ces balises pour prendre en charge XHTML (# 13200)
var wrapMap = {

	// Support: IE <= 9 seulement
	option: [1, "<select multiple = 'multiple'>", "</ select>"],

	// Les analyseurs XHTML n'insèrent pas comme par magie des éléments dans le
	// de la même manière que les analyseurs de soupe de balises. Donc on ne peut pas raccourcir
	// ceci en omettant <tbody> ou d'autres éléments requis.
	thead: [1, "<table>", "</ table>"],
	col: [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
	td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default: [0, "", ""]
};

// Support: IE <= 9 seulement
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


fonction getAll (contexte, balise) {

	// Support: IE <= 9 - 11 seulement
	// utilise typeof pour éviter l'appel de la méthode zéro argument sur les objets hôte (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "indéfini") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (typeof context.querySelectorAll! == "indéfini") {
		ret = context.querySelectorAll (tag || "*");

	} autre {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (contexte, tag)) {
		return jQuery.merge ([context], ret);
	}

	retour ret;
}


// Marquer les scripts comme ayant déjà été évalués
fonction setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	pour (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		)
	}
}


var rhtml = / <| & #? \ w +; /;

fonction buildFragment (elems, contexte, scripts, sélection, ignoré) {
	var elem, tmp, étiquette, enveloppe, attaché, j,
		fragment = context.createDocumentFragment (),
		nœuds = [],
		i = 0,
		l = elems.length;

	pour (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Ajout direct de noeuds
			if (toType (elem) === "objet") {

				// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply (_, arraylike) jette sur un ancien WebKit
				jQuery.merge (noeuds, elem.nodeType? [elem]: elem);

			// Convertir un fichier non-HTML en nœud de texte
			} sinon si (! rhtml.test (elem)) {
				nœuds.push (context.createTextNode (elem));

			// Convertir le HTML en nœuds DOM
			} autre {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// désérialiser une représentation standard
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Descend à travers les wrappers jusqu'au bon contenu
				j = enveloppement [0];
				tandis que (j--) {
					tmp = tmp.lastChild;
				}

				// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply (_, arraylike) jette sur un ancien WebKit
				jQuery.merge (noeuds, tmp.childNodes);

				// Mémoriser le conteneur de niveau supérieur
				tmp = fragment.firstChild;

				// Assurez-vous que les noeuds créés sont orphelins (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Retirer le wrapper du fragment
	fragment.textContent = "";

	i = 0;
	while ((elem = nœuds [i ++])) {

		// Ignorer les éléments déjà présents dans la collection de contextes (trac-4087)
		if (selection && jQuery.inArray (elem, selection)> -1) {
			si (ignoré) {
				ignored.push (elem);
			}
			continuer;
		}

		attaché = est attaché (elem);

		// Ajouter au fragment
		tmp = getAll (fragment.appendChild (elem), "script");

		// Préserver l'historique d'évaluation du script
		si Joint ) {
			setGlobalEval (tmp);
		}

		// Capture les exécutables
		si (scripts) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	retourner le fragment;
}


( une fonction() {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Support: Android 4.0 - 4.3 uniquement
	// Vérifier l'état perdu si le nom est défini (# 11217)
	// Assistance: applications Web Windows (WWA)
	// `name` et` type` doivent utiliser .setAttribute pour WWA (# 14901)
	input.setAttribute ("type", "radio");
	input.setAttribute ("vérifié", "vérifié");
	input.setAttribute ("nom", "t");

	div.appendChild (entrée);

	// Support: Android <= 4.1 uniquement
	// L'ancien WebKit ne clone pas l'état coché correctement dans les fragments
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Support: IE <= 11 seulement
	// Assurez-vous que textarea (et la case à cocher) defaultValue est correctement cloné
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();


var
	rkeyEvent = / ^ clé /,
	rmouseEvent = / ^ (?: souris | pointeur | menu contextuel | glisser | déposer) | cliquez /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

fonction returnTrue () {
	retourne vrai;
}

fonction returnFalse () {
	retourne faux;
}

// Support: IE <= 9 - 11+
// focus () et blur () sont asynchrones, sauf quand ils sont no-op.
// Donc attendez-vous à ce que le focus soit synchrone lorsque l'élément est déjà actif,
// et flou pour être synchrone lorsque l'élément n'est pas déjà actif.
// (la focalisation et le flou sont toujours synchrones dans les autres navigateurs pris en charge,
// cela définit juste quand on peut compter dessus).
fonction expectSync (elem, type) {
	return (elem === safeActiveElement ()) === (tapez === "focus");
}

// Support: IE <= 9 seulement
// L'accès à document.activeElement peut lancer de manière inattendue
// https://bugs.jquery.com/ticket/13393
function safeActiveElement () {
	essayer {
		renvoyer document.activeElement;
	} catch (err) {}
}

fonction activée (elem, types, sélecteur, données, fn, un) {
	var origFn, type;

	// Les types peuvent être une carte de types / gestionnaires
	if (typeof types === "objet") {

		// (types-Object, sélecteur, données)
		if (typeof selector! == "string") {

			// (types-Object, data)
			data = data || sélecteur;
			sélecteur = non défini;
		}
		pour (tapez les types) {
			on (elem, type, sélecteur, données, types [type], un);
		}
		renvoyer elem;
	}

	if (data == null && fn == null) {

		// (types, fn)
		fn = sélecteur;
		data = sélecteur = non défini;
	} sinon si (fn == null) {
		if (typeof selector === "string") {

			// (types, sélecteur, fn)
			fn = données;
			données = non défini;
		} autre {

			// (types, data, fn)
			fn = données;
			données = sélecteur;
			sélecteur = non défini;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} sinon si (! fn) {
		renvoyer elem;
	}

	si (un === 1) {
		origFn = fn;
		fn = fonction (événement) {

			// Peut utiliser un ensemble vide, puisque l'événement contient l'information
			jQuery (). off (événement);
			retourne origFn.apply (this, arguments);
		};

		// Utiliser le même guide pour que l'appelant puisse se désabonner en utilisant origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	retourne elem.each (function () {
		jQuery.event.add (this, types, fn, data, selector);
	});
}

/ *
 * Fonctions d'assistance pour la gestion des événements - ne fait pas partie de l'interface publique.
 * Accessoires de la bibliothèque addEvent de Dean Edwards pour la plupart des idées.
 * /
jQuery.event = {

	global: {},

	add: fonction (elem, types, gestionnaire, données, sélecteur) {

		var handleObjIn, eventHandle, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.get (elem);

		// Ne pas attacher d'événements aux noeuds noData ou text / comment (mais autoriser les objets simples)
		si (! elemData) {
			revenir;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire.
		if (handler.handler) {
			handleObjIn = handler;
			gestionnaire = handleObjIn.handler;
			sélecteur = handleObjIn.selector;
		}

		// Assurez-vous que les sélecteurs non valides lèvent des exceptions lors de la connexion
		// Evalue contre documentElement si elem est un noeud non-élément (par exemple, document)
		si (sélecteur) {
			jQuery.find.matchesSelector (documentElement, sélecteur);
		}

		// Assurez-vous que le gestionnaire a un identifiant unique, utilisé pour le rechercher / le supprimer ultérieurement
		si (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Initie la structure d'événement et le gestionnaire principal de l'élément, s'il s'agit du premier
		if (! (events = elemData.events)) {
			événements = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Ignore le deuxième événement d'un jQuery.event.trigger () et
				// lorsqu'un événement est appelé après le déchargement d'une page
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments): undefined;
			};
		}

		// Gère plusieurs événements séparés par un espace
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Il doit y avoir un type, pas de gestionnaire de liens associé à un espace de noms uniquement
			si (! type) {
				continuer;
			}

			// Si event change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié.
			special = jQuery.event.special [type] || {};

			// Si le sélecteur est défini, détermine le type d'api d'événement spécial, sinon le type donné
			type = (sélecteur? special.delegateType: special.bindType) || type;

			// Mise à jour spéciale basée sur le type nouvellement réinitialisé
			special = jQuery.event.special [type] || {};

			// handleObj est transmis à tous les gestionnaires d'événements
			handleObj = jQuery.extend ({
				type: type,
				origType: origType,
				data: data,
				gestionnaire: gestionnaire,
				guid: handler.guid,
				sélecteur: sélecteur,
				needsContext: selector && jQuery.expr.match.needsContext.test (sélecteur),
				namespace: namespaces.join (".")
			}, handleObjIn);

			// Initie la file d'attente du gestionnaire d'événements si nous sommes le premier
			if (! (gestionnaires = événements [type])) {
				gestionnaires = événements [type] = [];
				handlers.delegateCount = 0;

				// N'utilisez addEventListener que si le gestionnaire d'événements spéciaux renvoie false
				si (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			si (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Ajouter à la liste des gestionnaires de l'élément, les délégués devant
			si (sélecteur) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} autre {
				handlers.push (handleObj);
			}

			// Garder une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global [type] = true;
		}

	},

	// Détache un événement ou un ensemble d'événements d'un élément
	remove: fonction (elem, types, gestionnaire, sélecteur, mappedTypes) {

		var j, origCount, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			revenir;
		}

		// une fois pour chaque type.namespace dans les types; le type peut être omis
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		tandis que (t--) {
			tmp = rtypenamespace.exec (types [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// annule la liaison de tous les événements (sur cet espace de noms, le cas échéant) pour l'élément
			si (! type) {
				pour (tapez des événements) {
					jQuery.event.remove (elem, type + types [t], gestionnaire, sélecteur, true);
				}
				continuer;
			}

			special = jQuery.event.special [type] || {};
			type = (sélecteur? special.delegateType: special.bindType) || type;
			handlers = events [type] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Supprimer les événements correspondants
			origCount = j = handlers.length;
			tandis que (j--) {
				handleObj = gestionnaires [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						sélecteur === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Supprime le gestionnaire d'événements générique si nous supprimons quelque chose et qu'il n'y a plus de gestionnaires
			// (évite les risques de récursion sans fin lors de la suppression des gestionnaires d'événements spéciaux)
			if (origCount &&! handlers.length) {
				si (! special.teardown ||
					special.teardown.call (elem, espaces de noms, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				supprimer des événements [type];
			}
		}

		// Supprime les données et le expando s'il n'est plus utilisé
		if (jQuery.isEmptyObject (events)) {
			dataPriv.remove (elem, "gérer les événements");
		}
	},

	dispatch: function (nativeEvent) {

		// Crée un jQuery.Event en écriture à partir de l'objet événement natif
		var event = jQuery.event.fix (nativeEvent);

		var i, j, ret, apparié, handleObj, handlerQueue,
			args = new Array (arguments.length),
			handlers = (dataPriv.get (this, "events") || {}) [event.type] || []
			special = jQuery.event.special [event.type] || {};

		// Utiliser le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args [0] = event;

		pour (i = 1; i <arguments.length; i ++) {
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		// Appelez le hook preDispatch pour le type mappé et laissez-le vider si vous le souhaitez
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			revenir;
		}

		// Déterminer les gestionnaires
		handlerQueue = jQuery.event.handlers.call (this, événement, gestionnaires);

		// Exécuter les délégués en premier; ils peuvent vouloir arrêter la propagation sous nous
		i = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// Si l'événement est namespaced, alors chaque gestionnaire n'est appelé que s'il est
				// spécialement universel ou ses espaces de noms sont un sur-ensemble de l'événement.
				if (! event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == non défini) {
						if ((event.result = ret)) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Appelez le hook postDispatch pour le type mappé
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	},

	gestionnaires: fonction (événement, gestionnaires) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Trouver des gestionnaires de délégués
		if (delegateCount &&

			// Support: IE <= 9
			// arbres d'instance SVG <use> en trou noir (trac-13180)
			cur.nodeType &&

			// Support: Firefox <= 42
			// Suppression des clics violant les spécifications indiquant un bouton de pointeur non principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 uniquement
			// ... mais pas les flèches "touches" des entrées radio pouvant contenir `button` -1 (gh-2343)
			! (event.type === "cliquez sur" && event.button> = 1)) {

			pour (; cur! == this; cur = cur.parentNode || this) {

				// Ne coche pas les non-éléments (# 13208)
				// Ne traite pas les clics sur les éléments désactivés (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "cliquez" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					pour (i = 0; i <delegateCount; i ++) {
						handleObj = gestionnaires [i];

						// Ne pas en conflit avec les propriétés Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === non défini) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, handlers: matchedHandlers});
					}
				}
			}
		}

		// Ajoute les gestionnaires restants (directement liés)
		cur = this;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, handlers: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp: fonction (nom, crochet) {
		Object.defineProperty (jQuery.Event.prototype, nom, {
			énumérable: true,
			configurable: true,

			get: isFunction (crochet)?
				une fonction() {
					if (this.originalEvent) {
							crochet de retour (this.originalEvent);
					}
				}:
				une fonction() {
					if (this.originalEvent) {
							renvoyer this.originalEvent [nom];
					}
				},

			set: fonction (valeur) {
				Object.defineProperty (this, name, {
					énumérable: true,
					configurable: true,
					accessible en écriture: vrai,
					valeur: valeur
				});
			}
		});
	},

	correctif: fonction (originalEvent) {
		retourne originalEvent [jQuery.expando]?
			originalEvent:
			new jQuery.Event (originalEvent);
	},

	spécial: {
		charge: {

			// Empêche les événements déclenchés image.load de se propager à window.load
			noBubble: true
		},
		Cliquez sur: {

			// Utiliser l'événement natif pour assurer un état correct pour les entrées vérifiables
			configuration: fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez `this` access par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = this || Les données;

				// Réclamer le premier gestionnaire
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					// dataPriv.set (el, "click", ...)
					leverageNative (el, "click", returnTrue);
				}

				// Retourne false pour permettre un traitement normal dans l'appelant
				retourne faux;
			},
			déclencheur: fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez `this` access par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = this || Les données;

				// Force l'installation avant de déclencher un clic
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					leverageNative (el, "click");
				}

				// Renvoie non-false pour permettre la propagation normale du chemin d'événement
				retourne vrai;
			},

			// Pour la cohérence entre les navigateurs, supprimez le .click () natif sur les liens
			// Empêche également si nous sommes actuellement dans une pile d'événements natifs exploitée
			_default: function (event) {
				var target = event.target;
				return rcheckableType.test (target.type) &&
					target.click && nodeName (target, "input") &&
					dataPriv.get (target, "click") ||
					nodeName (cible, "a");
			}
		},

		avant le chargement: {
			postDispatch: fonction (événement) {

				// Support: Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Assure la présence d'un écouteur d'événement qui gère les événements déclenchés manuellement
// événements synthétiques en interrompant la progression jusqu'à ce qu'ils soient réinvoqués en réponse à
// * événements natifs * qu'il déclenche directement, en s'assurant que les changements d'état ont
// se produisait déjà avant que d'autres écouteurs soient appelés.
fonction leverageNative (el, type, expectSync) {

	// expectSync manquant indique un appel de déclencheur, qui doit forcer la configuration via jQuery.event.add
	si (! expectSync) {
		if (dataPriv.get (el, type) === non défini) {
			jQuery.event.add (el, type, returnTrue);
		}
		revenir;
	}

	// Enregistre le contrôleur en tant que gestionnaire universel spécial pour tous les espaces de noms d'événements
	dataPriv.set (el, type, false);
	jQuery.event.add (el, tapez, {
		espace de noms: false,
		gestionnaire: function (event) {
			var notAsync, résultat,
				saved = dataPriv.get (this, type);

			if ((event.isTrigger & 1) && this [type]) {

				// Interruption du traitement de l'événement synthétique synthétique .trigger () ed
				// Les données sauvegardées doivent être false dans ce cas, mais peuvent être un objet de capture restant
				// depuis un gestionnaire natif asynchrone (gh-4350)
				si (! saved.length) {

					// Stocke les arguments à utiliser lors de la gestion de l'événement natif interne
					// Il y aura toujours au moins un argument (un objet event), donc ce tableau
					// ne sera pas confondu avec un objet de capture restant.
					saved = slice.call (arguments);
					dataPriv.set (this, tapez, sauvegardé);

					// Déclencher l'événement natif et capturer son résultat
					// Support: IE <= 9 - 11+
					// focus () et blur () sont asynchrones
					notAsync = expectSync (this, type);
					ce type ]();
					resultat = dataPriv.get (this, type);
					si (enregistré! == résultat || notAsync) {
						dataPriv.set (this, type, false);
					} autre {
						résultat = {};
					}
					si (enregistré! == résultat) {

						// Annuler l'événement de synthèse externe
						event.stopImmediatePropagation ();
						event.preventDefault ();
						return result.value;
					}

				// S'il s'agit d'un événement de synthèse interne pour un événement avec un substitut bouillonnant
				// (focus ou flou), supposons que le substitut déjà propagé déclenche la
				// événement natif et empêcher que cela ne se reproduise ici.
				// Ceci obtient techniquement le mauvais ordre de commande vers `.trigger ()` (dans lequel le
				// le substitut bouillonnant se propage * après * la base non bouillonnante), mais cela semble
				// moins mauvais que la duplication.
				} else if ((jQuery.event.special [type] || {}) .delegateType) {
					event.stopPropagation ();
				}

			// S'il s'agit d'un événement natif déclenché ci-dessus, tout est maintenant en ordre.
			// Lance un événement de synthèse interne avec les arguments d'origine
			} sinon si (saved.length) {

				// ... et capturer le résultat
				dataPriv.set (this, tapez, {
					valeur: jQuery.event.trigger (

						// Support: IE <= 9 - 11+
						// Étendre avec le prototype pour réinitialiser le stopImmediatePropagation () ci-dessus
						jQuery.extend (enregistré [0], jQuery.Event.prototype),
						Saved.slice (1),
						ce
					)
				});

				// Abandonner le traitement de l'événement natif
				event.stopImmediatePropagation ();
			}
		}
	});
}

jQuery.removeEvent = fonction (elem, type, handle) {

	// Ce "si" est nécessaire pour les objets simples
	if (elem.removeEventListener) {
		elem.removeEventListener (type, handle);
	}
};

jQuery.Event = function (src, props) {

	// Autoriser l'instanciation sans le mot clé 'nouveau'
	if (! (cette instance de jQuery.Event)) {
		renvoyer new jQuery.Event (src, props);
	}

	// objet événement
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Les événements qui remontent dans le document peuvent avoir été marqués comme empêchés
		// par un gestionnaire plus bas dans l'arbre; refléter la valeur correcte.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === non défini &&

				// Support: Android <= 2.3 uniquement
				src.returnValue === false?
			returnTrue:
			returnFalse;

		// Créer les propriétés de la cible
		// Support: Safari <= 6 - 7 uniquement
		// La cible ne doit pas être un nœud de texte (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Type d'événement
	} autre {
		this.type = src;
	}

	// Place les propriétés fournies explicitement sur l'objet événement
	si (accessoires) {
		jQuery.extend (this, props);
	}

	// Crée un horodatage si l'événement entrant n'en a pas
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marque comme fixe
	this [jQuery.expando] = true;
};

// jQuery.Event est basé sur les événements DOM3 spécifiés par la liaison de langage ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructeur: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Inclut tous les accessoires d'événements courants, y compris les accessoires spécifiques à KeyEvent et MouseEvent
jQuery.each ({
	altKey: true,
	bulles: vrai,
	cancelable: true,
	changéTouches: vrai,
	ctrlKey: true,
	détail: vrai,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	vue: vrai,
	"char": vrai,
	code: true,
	charCode: true,
	clé: vrai,
	keyCode: true,
	bouton: vrai,
	boutons: vrai,
	clientX: true,
	clientY: vrai,
	offsetX: true,
	offsetY: true,
	pointeur: true,
	type de pointeur: true,
	screenX: true,
	screenY: vrai,
	targetTouches: true,
	toElement: true,
	touche: vrai,

	qui: fonction (événement) {
		var button = event.button;

		// Ajoute lequel pour les événements clés
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode: event.keyCode;
		}

		// Ajouter lequel pour un clic: 1 === left; 2 === milieu; 3 === droite
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			si (bouton et 1) {
				retourne 1;
			}

			si (bouton et 2) {
				retourne 3;
			}

			si (bouton et 4) {
				retourne 2;
			}

			retourne 0;
		}

		événement de retour.
	}
}, jQuery.event.addProp);

jQuery.each ({focus: "focusin", flou: "focusout"}, fonction (type, delegateType) {
	jQuery.event.special [type] = {

		// Utilise si possible l'événement natif pour que la séquence de flou / focus soit correcte
		configuration: function () {

			// Réclamer le premier gestionnaire
			// dataPriv.set (this, "focus", ...)
			// dataPriv.set (this, "blur", ...)
			leverageNative (this, type, expectSync);

			// Retourne false pour permettre un traitement normal dans l'appelant
			retourne faux;
		},
		déclencheur: function () {

			// Force la configuration avant le déclenchement
			leverageNative (this, type);

			// Renvoie non-false pour permettre la propagation normale du chemin d'événement
			retourne vrai;
		},

		delegateType: delegateType
	};
});

// Créer des événements mouseenter / leave à l'aide des contrôles mouseover / out et event-time
// donc cette délégation d'événements fonctionne dans jQuery.
// Faites la même chose pour pointerenter / pointinterleave et pointeur / pointeur
//
// Support: Safari 7 uniquement
// Safari envoie mouseenter trop souvent; voir:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// pour la description du bogue (il existait aussi dans les anciennes versions de Chrome).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointeur: "pointeur",
	pointeurleave: "pointeurout"
}, fonction (orig, correctif) {
	jQuery.event.special [orig] = {
		delegateType: correction,
		bindType: correction,

		handle: fonction (événement) {
			var ret,
				cible = ceci,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Pour mouseenter / leave, appelez le gestionnaire s'il est associé à l'extérieur de la cible.
			// NB: No relatedTarget si la souris est à gauche / est entrée dans la fenêtre du navigateur
			if (! related || (related! == target &&! jQuery.contains (target, related)))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (this, arguments);
				event.type = fix;
			}
			retour ret;
		}
	};
});

jQuery.fn.extend ({

	on: fonction (types, sélecteur, données, fn) {
		retourne sur (this, types, selector, data, fn);
	},
	un: fonction (types, sélecteur, données, fn) {
		retourne sur (this, types, selector, data, fn, 1);
	},
	off: fonction (types, sélecteur, fn) {
		var handleObj, tapez;
		if (types && types.preventDefault && types.handleObj) {

			// (événement) envoyé jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			)
			retournez ceci;
		}
		if (typeof types === "objet") {

			// (types-objet [, sélecteur])
			pour (tapez les types) {
				this.off (type, sélecteur, types [type]);
			}
			retournez ceci;
		}
		if (sélecteur === faux || typeof sélecteur === "fonction") {

			// (types [, fn])
			fn = sélecteur;
			sélecteur = non défini;
		}
		if (fn === false) {
			fn = returnFalse;
		}
		retourne this.each (function () {
			jQuery.event.remove (this, types, fn, sélecteur);
		});
	}
});


var

	/ * eslint-disable max-len * /

	// Voir https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <(?! zone | br | col | incorporer | hr | img | entrée | lien | méta | paramètre) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi,

	/ * eslint-enable * /

	// Support: IE <= 10 - 11, Edge 12 - 13 uniquement
	// Dans IE / Edge, les groupes de regex provoquent de graves ralentissements.
	// Voir https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <style | <lien / i,

	// vérifié = "vérifié" ou vérifié
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Préférer un tbody à sa table parent pour contenir de nouvelles lignes
fonction manipulationTarget (elem, content) {
	if (nodeName (elem, "table") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem;
	}

	renvoyer elem;
}

// Remplacer / restaurer l'attribut type des éléments de script pour une manipulation sécurisée du DOM
fonction disableScript (elem) {
	elem.type = (elem.getAttribute ("type")! == null) + "/" + elem.type;
	renvoyer elem;
}
function restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} autre {
		elem.removeAttribute ("type");
	}

	renvoyer elem;
}

fonction cloneCopyEvent (src, dest) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, événements;

	if (dest.nodeType! == 1) {
		revenir;
	}

	// 1. Copier des données privées: événements, gestionnaires, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.access (src);
		pdataCur = dataPriv.set (dest, pdataOld);
		événements = pdataOld.events;

		si (événements) {
			supprimer pdataCur.handle;
			pdataCur.events = {};

			pour (tapez des événements) {
				pour (i = 0, l = événements [type] .length; i <l; i ++) {
					jQuery.event.add (destination, type, événements [type] [i]);
				}
			}
		}
	}

	// 2. Copier les données utilisateur
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corrige les bugs IE, voir les tests de support
fonction fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// Ne réussit pas à conserver l'état coché d'une case à cocher ou d'un bouton radio cloné.
	if (nodeName === "input" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// Ne réussit pas à ramener l'option sélectionnée à l'état sélectionné par défaut lors du clonage des options
	} else if (nom_noeud === "entrée" || nom_noeud === "zone de texte") {
		dest.defaultValue = src.defaultValue;
	}
}

fonction domManip (collection, args, callback, ignorée) {

	// Aplatir les tableaux imbriqués
	args = concat.apply ([], args);

	fragment var, d'abord, scripts, hasScripts, noeud, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		valeur = args [0],
		valueIsFunction = isFunction (valeur);

	// Nous ne pouvons pas cloner de fragments contenant des éléments cochés dans WebKit
	if (valueIsFunction ||
			(l> 1 && typeof value === "chaîne" &&
				! support.checkClone && rchecked.test (valeur)))) {
		retourne collection.each (fonction (index) {
			var self = collection.eq (index);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (self, args, callback, ignoré);
		});
	}

	si (l) {
		fragment = buildFragment (args, collection [0] .ownerDocument, false, collection, ignoré);
		first = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			fragment = premier;
		}

		// Requiert soit un nouveau contenu, soit un intérêt pour les éléments ignorés pour invoquer le rappel
		if (premier || ignoré) {
			scripts = jQuery.map (getAll (fragment, "script"), disableScript);
			hasScripts = scripts.length;

			// Utiliser le fragment d'origine pour le dernier élément
			// au lieu du premier parce que ça peut finir
			// être vidé de manière incorrecte dans certaines situations (# 8070).
			pour (; i <l; i ++) {
				noeud = fragment;

				if (i! == iNoClone) {
					noeud = jQuery.clone (noeud, vrai, vrai);

					// Conserver les références aux scripts clonés pour une restauration ultérieure
					si (hasScripts) {

						// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
						// push.apply (_, arraylike) jette sur un ancien WebKit
						jQuery.merge (scripts, getAll (noeud, "script"));
					}
				}

				callback.call (collection [i], noeud, i);
			}

			si (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Réactiver les scripts
				jQuery.map (scripts, restoreScript);

				// Évaluer les scripts exécutables lors de la première insertion de document
				pour (i = 0; i <hasScripts; i ++) {
					noeud = scripts [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (noeud, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "module") {

							// Dépendance AJAX facultative, mais n'exécutera pas de scripts si elle n'est pas présente
							if (jQuery._evalUrl &&! node.noModule) {
								jQuery._evalUrl (node.src, {
									nonce: node.nonce || node.getAttribute ("nonce")
								});
							}
						} autre {
							DOMEval (node.textContent.replace (rcleanScript, ""), node, doc);
						}
					}
				}
			}
		}
	}

	ramasser la collection;
}

fonction remove (elem, selector, keepData) {
	noeud var,
		noeuds = sélecteur? jQuery.filter (sélecteur, elem): elem,
		i = 0;

	pour (; (noeud = noeuds [i])! = null; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (node));
		}

		if (node.parentNode) {
			if (keepData && isAttached (node)) {
				setGlobalEval (getAll (node, "script"));
			}
			node.parentNode.removeChild (nœud);
		}
	}

	renvoyer elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		return html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	},

	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = isAttached (elem);

		// Résoudre les problèmes de clonage IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Nous évitons Sizzle ici pour des raisons de performances: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clone);
			srcElements = getAll (elem);

			pour (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copier les événements de l'original sur le clone
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clone);

				pour (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} autre {
				cloneCopyEvent (elem, clone);
			}
		}

		// Préserver l'historique d'évaluation du script
		destElements = getAll (clone, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// retourne le jeu cloné
		retourner le clone;
	},

	cleanData: fonction (elems) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		pour (; (elem = elems [i])! == non défini; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando]))) {
					if (data.events) {
						pour (tapez data.events) {
							if (spécial [type]) {
								jQuery.event.remove (elem, type);

							// Ceci est un raccourci pour éviter les frais généraux de jQuery.event.remove
							} autre {
								jQuery.removeEvent (elem, type, data.handle);
							}
						}
					}

					// Assistance: Chrome <= 35 - 45+
					// Affecter undefined au lieu d'utiliser delete, voir Data # remove
					elem [dataPriv.expando] = undefined;
				}
				if (elem [dataUser.expando]) {

					// Assistance: Chrome <= 35 - 45+
					// Affecter undefined au lieu d'utiliser delete, voir Data # remove
					elem [dataUser.expando] = undefined;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	détacher: fonction (sélecteur) {
		return remove (this, sélecteur, vrai);
	},

	remove: fonction (sélecteur) {
		retournez remove (this, sélecteur);
	},

	texte: fonction (valeur) {
		retourne l'accès (this, function (value) {
			valeur de retour === non définie?
				jQuery.text (this):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = valeur;
					}
				});
		}, null, valeur, arguments.length);
	},

	append: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.appendChild (elem);
			}
		});
	},

	prepend: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	avant: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	},

	après: function () {
		retourne domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	vide: function () {
		var elem
			i = 0;

		pour (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// Prévenir les fuites de mémoire
				jQuery.cleanData (getAll (elem, false));

				// Supprimer tous les nœuds restants
				elem.textContent = "";
			}
		}

		retournez ceci;
	},

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? false: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		retourne this.map (function () {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	},

	html: fonction (valeur) {
		retourne l'accès (this, function (value) {
			var elem = this [0] || {},
				i = 0,
				l = this.length;

			if (valeur === non définie && elem.nodeType === 1) {
				retourne elem.innerHTML;
			}

			// Voyez si nous pouvons utiliser un raccourci et simplement utiliser innerHTML
			if (typeof value === "chaîne" &&! rnoInnerhtml.test (valeur) &&
				! wrapMap [(rtagName.exec (valeur) || ["", ""]) [1] .toLowerCase ()]) {

				valeur = jQuery.htmlPrefilter (valeur);

				essayer {
					pour (; i <l; i ++) {
						elem = this [i] || {};

						// Supprime les nœuds d'élément et évite les fuites de mémoire
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valeur;
						}
					}

					elem = 0;

				// Si innerHTML lève une exception, utilisez la méthode de repli
				} catch (e) {}
			}

			si (elem) {
				this.empty (). append (valeur);
			}
		}, null, valeur, arguments.length);
	},

	replaceWith: function () {
		var ignored = [];

		// Apporte les modifications en remplaçant chaque élément de contexte non ignoré par le nouveau contenu
		retourne domManip (this, arguments, function (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (this, ignored) <0) {
				jQuery.cleanData (getAll (this));
				si (parent) {
					parent.replaceChild (elem, this);
				}
			}

		// Forcer l'appel de rappel
		}, ignoré);
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend",
	insertAvant: "avant",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, fonction (nom, original) {
	jQuery.fn [nom] = fonction (sélecteur) {
		var elems,
			ret = [],
			insert = jQuery (sélecteur),
			last = insert.length - 1,
			i = 0;

		pour (; i <= last; i ++) {
			elems = i === dernier? this: this.clone (vrai);
			jQuery (insérez [i]) [original] (elems);

			// Support: Android <= 4.0 uniquement, PhantomJS 1 uniquement
			// .get () parce que push.apply (_, arraylike) jette sur l'ancien WebKit
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Support: IE <= 11 seulement, Firefox <= 30 (# 15098, # 14150)
		// IE jette des éléments créés dans des popups
		// Pendant ce temps, FF jette sur les éléments de cadre via "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		si (! view ||! view.opener) {
			vue = fenêtre;
		}

		retournez view.getComputedStyle (elem);
	};

var rboxStyle = new RegExp (cssExpand.join ("|"), "i");



( une fonction() {

	// L'exécution des tests pixelPosition et boxSizingReliable nécessite une seule présentation.
	// donc ils sont exécutés en même temps pour sauvegarder le deuxième calcul.
	fonction computeStyleTests () {

		// Ceci est un singleton, nous ne devons l'exécuter qu'une seule fois
		si (! div) {
			revenir;
		}

		container.style.cssText = "position: absolute; left: -11111px; width: 60px;" +
			"margin-top: 1px; remplissage: 0; bordure: 0";
		div.style.cssText =
			"position: relative; display: block; size-box: border-box; débordement: scroll;" +
			"margin: auto; border: 1px; padding: 1px;" +
			"largeur: 60%; haut: 1%";
		documentElement.appendChild (conteneur) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Support: Android 4.0 - 4.3 uniquement, Firefox <= 3 - 44
		fiableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Assistance: Android 4.0 - 4.3 uniquement, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Certains styles reviennent avec des pourcentages, même s'ils ne devraient pas
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Support: IE 9 - 11 seulement
		// Détecter les fausses déclarations de dimensions de contenu pour la taille de la boîte: éléments de bordure
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Support: IE 9 uniquement
		// Détecter le débordement: défilement des pages (gh-3699)
		// Assistance: Chrome <= 64
		// Ne vous laissez pas avoir lorsque le zoom affecte offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures (div.offsetWidth / 3) === 12;

		documentElement.removeChild (conteneur);

		// Nullify le div afin qu'il ne soit pas stocké dans la mémoire et
		// ce sera aussi un signe que les contrôles déjà effectués
		div = null;
	}

	function roundPixelMeasures (measure) {
		return Math.round (parseFloat (mesure));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		fiableMarginLeftVal,
		conteneur = document.createElement ("div"),
		div = document.createElement ("div");

	// Terminer tôt dans des environnements limités (sans navigateur)
	si (! div.style) {
		revenir;
	}

	// Support: IE <= 9 - 11 seulement
	// Le style de l'élément cloné affecte l'élément source cloné (# 8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend (support, {
		boxSizingReliable: function () {
			computeStyleTests ();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function () {
			computeStyleTests ();
			return pixelBoxStylesVal;
		},
		pixelPosition: function () {
			computeStyleTests ();
			return pixelPositionVal;
		},
		fiableMarginLeft: function () {
			computeStyleTests ();
			renvoyer fiableMarginLeftVal;
		},
		scrollboxSize: function () {
			computeStyleTests ();
			return scrollboxSizeVal;
		}
	});
}) ();


fonction curCSS (elem, name, calculé) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Récupérer le style avant de le calculer
		// corrige un problème avec l'obtention de valeurs erronées
		// sur des éléments détachés
		style = elem.style;

	calculé = calculé || getStyles (elem);

	// getPropertyValue est nécessaire pour:
	// .css ('filter') (uniquement pour IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	si (calculé) {
		ret = computed.getPropertyValue (name) || calculé [nom];

		if (ret === "" &&! isAttached (elem)) {
			ret = jQuery.style (elem, name);
		}

		// Un hommage au "super bidouille de Dean Edwards"
		// Android Browser renvoie un pourcentage pour certaines valeurs,
		// mais la largeur semble être de manière fiable pixels.
		// Ceci est contre le projet de spécification CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (nom)) {

			// Mémoriser les valeurs d'origine
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Ajoute les nouvelles valeurs pour obtenir une valeur calculée
			style.minWidth = style.maxWidth = style.width = ret;
			ret = largeur calculée;

			// Revenir sur les valeurs modifiées
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	Retourner Ret! == Non défini?

		// Support: IE <= 9 - 11 seulement
		// IE renvoie la valeur zIndex sous forme d'entier.
		ret + "":
		ret;
}


fonction addGetHookIf (conditionFn, hookFn) {

	// Définit le hook, nous vérifierons lors de la première exécution si c'est vraiment nécessaire.
	revenir {
		get: function () {
			si (conditionFn ()) {

				// Le crochet n'est pas nécessaire (ou il n'est pas possible de l'utiliser parce que
				// dépendance manquante), supprimez-le.
				supprimer this.get;
				revenir;
			}

			// crochet nécessaire; redéfinissez-le pour que le test de support ne soit pas exécuté à nouveau.
			return (this.get = hookFn) .apply (this, arguments);
		}
	};
}


var cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style,
	vendorProps = {};

// Retourne une propriété préfixée par le vendeur ou indéfinie
fonction vendorPropName (name) {

	// Vérifier les noms préfixés par le fournisseur
	var capName = nom [0] .toUpperCase () + nom.slice (1),
		i = cssPrefixes.length;

	alors que je-- ) {
		name = cssPrefixes [i] + capName;
		if (nom dans emptyStyle) {
			renvoyer le nom;
		}
	}
}

// retourne une propriété jQuery.cssProps ou un préfixe de fournisseur potentiellement mappée
fonction finalPropName (name) {
	var final = jQuery.cssProps [nom] || vendorProps [nom];

	si (final) {
		retour final;
	}
	if (nom dans emptyStyle) {
		renvoyer le nom;
	}
	return vendorProps [name] = vendorPropName (name) || prénom;
}


var

	// permutable si l'affichage est nul ou commence par un tableau
	// sauf "table", "cellule-cellule" ou "légende-table"
	// Voir ici pour les valeurs d'affichage: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = / ^ - /,
	cssShow = {position: "absolute", visibilité: "hidden", display: "block"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

fonction setPositiveNumber (elem, value, soustract) {

	// Toutes les valeurs relatives (+/-) ont déjà été
	// normalisé à ce stade
	var correspond = rcssNum.exec (valeur);
	retourner les matchs?

		// Garde contre "soustraire" non défini, par exemple, lorsqu'il est utilisé comme dans cssHooks
		Math.max (0, correspond à [2] - (soustraire || 0)) + (correspond à [3] || "px"):
		valeur;
}

function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimension === "largeur"? dix,
		extra = 0,
		delta = 0;

	// Un ajustement peut ne pas être nécessaire
	if (box === (isBorderBox? "border": "content")) {
		retourne 0;
	}

	pour (; i <4; i + = 2) {

		// Les deux modèles de boîte excluent la marge
		si (case === "marge") {
			delta + = jQuery.css (elem, box + cssExpand [i], true, styles);
		}

		// Si nous arrivons ici avec un contenu-box, nous cherchons "padding" ou "border" ou "margin"
		si (! isBorderBox) {

			// Ajouter un rembourrage
			delta + = jQuery.css (elem, "padding" + cssExpand [i], true, styles);

			// Pour "bordure" ou "marge", ajouter une bordure
			if (box! == "padding") {
				delta + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);

			// Mais gardez-en une trace sinon
			} autre {
				extra + = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}

		// Si nous arrivons ici avec une boîte à bordure (contenu + bourrage + bordure), nous cherchons "contenu" ou
		// "padding" ou "margin"
		} autre {

			// Pour "contenu", soustraire le remplissage
			if (box === "content") {
				delta - = jQuery.css (elem, "padding" + cssExpand [i], true, styles);
			}

			// Pour "contenu" ou "remplissage", soustraire la bordure
			si (case! == "marge") {
				delta - = jQuery.css (elem, "border" + cssExpand [i] + "Width", true, styles);
			}
		}
	}

	// Prise en compte de la gouttière de défilement de la boîte de contenu positive lorsque demandé en fournissant computedVal
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight est une somme arrondie de contenu, de remplissage, de gouttière et de bordure.
		// En supposant que la gouttière de défilement entier, soustrayez le reste et arrondissez au bas
		delta + = Math.max (0, Math.ceil (
			elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
			computedVal -
			delta -
			supplémentaire -
			0.5

		// Si offsetWidth / offsetHeight est inconnu, nous ne pouvons pas déterminer la gouttière scroll-box
		// Utilise un zéro explicite pour éviter NaN (gh-3964)
		)) || 0;
	}

	retour delta;
}

fonction getWidthOrHeight (elem, dimension, extra) {

	// Commence avec le style calculé
	var styles = getStyles (elem),

		// Pour éviter de forcer un refusion, n'extrayez boxSizing que si nous en avons besoin (gh-4322).
		// Fake content-box jusqu'à ce que nous sachions qu'il est nécessaire de connaître la vraie valeur.
		boxSizingNeeded =! support.boxSizingReliable () || supplémentaire,
		isBorderBox = boxSizingNeeded &&
			jQuery.css (elem, "boxSizing", false, styles) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS (elem, dimension, styles),
		offsetProp = "offset" + dimension [0] .toUpperCase () + dimension.slice (1);

	// Support: Firefox <= 54
	// Retourne une valeur confuse non pixel ou feint l'ignorance, selon le cas.
	if (rnumnonpx.test (val)) {
		si (! extra) {
			return val;
		}
		val = "auto";
	}


	// Revenir à offsetWidth / offsetHeight lorsque la valeur est "auto"
	// Cela se produit pour les éléments en ligne sans réglage explicite (gh-3571)
	// Support: Android <= 4.1 - 4.3 uniquement
	// Utilise également offsetWidth / offsetHeight pour les dimensions en ligne mal déclarées (gh-3602)
	// Support: IE 9-11 uniquement
	// Utilisez également offsetWidth / offsetHeight lorsque le dimensionnement de la boîte n'est pas fiable
	// Nous utilisons getClientRects () pour vérifier les éléments masqués / déconnectés.
	// Dans ces cas, on peut faire confiance à la valeur calculée pour être border-box
	if ((! support.boxSizingReliable () && isBorderBox ||
		val === "auto" ||
		! parseFloat (val) && jQuery.css (elem, "display", false, styles) === "inline") &&
		elem.getClientRects (). length) {

		isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box";

		// Le cas échéant, offsetWidth / offsetHeight indique approximativement les dimensions de la boîte de bordure.
		// Si non disponible (par exemple, SVG), supposons une taille de boîte peu fiable et interprètent la
		// valeur récupérée sous forme de dimension de zone de contenu.
		valueIsBorderBox = offsetProp in elem;
		if (valueIsBorderBox) {
			val = elem [offsetProp];
		}
	}

	// Normalize "" et auto
	val = parseFloat (val) || 0;

	// Ajuster pour le modèle de boîte de l'élément
	retour (val +
		boxModelAdjustment (
			elem,
			dimension,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			modes,

			// Fournit la taille calculée actuelle pour demander le calcul de gouttière de défilement (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend ({

	// Ajout de crochets de propriété de style pour remplacer la valeur par défaut
	// comportement d'obtention et de définition d'une propriété de style
	cssHooks: {
		opacité: {
			get: function (elem, calculé) {
				si (calculé) {

					// On devrait toujours avoir un chiffre en retour de l'opacité
					var ret = curCSS (elem, "opacity");
					Retourner Ret === ""? "1": ret;
				}
			}
		}
	},

	// N'ajoute pas automatiquement "px" à ces propriétés éventuellement sans unité
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": vrai,
		"flexShrink": vrai,
		"fontWeight": true,
		"gridArea": ​​true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacité": vrai,
		"order": vrai,
		"orphelins": vrai,
		"veuves": vrai,
		"zIndex": true,
		"zoom": true
	},

	// Ajouter les propriétés dont vous souhaitez corriger les noms auparavant
	// définir ou obtenir la valeur
	cssProps: {},

	// Récupère et définit la propriété de style sur un nœud DOM
	style: fonction (elem, nom, valeur, extra) {

		// Ne pas définir de styles sur les nœuds de texte et de commentaire
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			revenir;
		}

		// Assurez-vous que nous travaillons avec le bon nom
		var ret, type, crochets,
			origName = camelCase (nom),
			isCustomProp = rcustomProp.test (nom),
			style = elem.style;

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne
		// veut interroger la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Accroche la version préfixée, puis la version non préfixée
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Vérifie si nous définissons une valeur
		if (valeur! == non définie) {
			type = typeof valeur;

			// Convertit "+ =" ou "- =" en nombres relatifs (# 7345)
			if (type === "chaîne" && (ret = rcssNum.exec (valeur)) && ret [1]) {
				valeur = adjustCSS (elem, name, ret);

				// corrige le bug # 9237
				type = "nombre";
			}

			// Assurez-vous que les valeurs null et NaN ne sont pas définies (# 7116)
			if (valeur == null || valeur! == valeur) {
				revenir;
			}

			// Si un nombre a été passé, ajoutez l'unité (à l'exception de certaines propriétés CSS)
			// La vérification isCustomProp peut être supprimée dans jQuery 4.0 lorsque nous ajoutons automatiquement
			// "px" à quelques valeurs codées en dur.
			if (tapez === "numéro" &&! isCustomProp) {
				valeur + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * props affecte les valeurs du clone d'origine
			if (! support.clearCloneStyle && valeur === "" && name.indexOf ("background") === 0) {
				style [nom] = "hériter";
			}

			// Si un hook a été fourni, utilisez cette valeur, sinon définissez simplement la valeur spécifiée
			if (! hooks ||! ("set" dans les crochets) ||
				(valeur = hooks.set (elem, value, extra))! == undefined) {

				if (isCustomProp) {
					style.setProperty (nom, valeur);
				} autre {
					style [nom] = valeur;
				}
			}

		} autre {

			// Si un hook a été fourni, récupère la valeur non calculée
			if (hooks && "get" dans les hooks &&
				(ret = hooks.get (elem, false, extra))! == undefined) {

				retour ret;
			}

			// Sinon, récupère la valeur de l'objet style
			style de retour [nom];
		}
	},

	css: fonction (elem, name, extra, styles) {
		var val, num, crochets,
			origName = camelCase (nom),
			isCustomProp = rcustomProp.test (nom);

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne
		// veut modifier la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Essayer le nom préfixé suivi du nom non préfixé
		hooks = jQuery.cssHooks [nom] || jQuery.cssHooks [origName];

		// Si un hook a été fourni, récupère la valeur calculée
		if (crochets && "get" dans les crochets) {
			val = hooks.get (elem, true, extra);
		}

		// Sinon, s'il existe un moyen d'obtenir la valeur calculée, utilisez-le
		if (val === non défini) {
			val = curCSS (elem, name, styles);
		}

		// Convertit "normal" en valeur calculée
		if (val === "normal" && nom dans cssNormalTransform) {
			val = cssNormalTransform [nom];
		}

		// Rendre numérique si forcé ou si un qualificatif a été fourni et val semble numérique
		if (extra === "" || extra) {
			num = parseFloat (val);
			renvoyer un supplément === true || isFinite (num)? num || 0: val;
		}

		return val;
	}
});

jQuery.each (["hauteur", "largeur"], fonction (i, dimension) {
	jQuery.cssHooks [dimension] = {
		get: function (elem, calculé, extra) {
			si (calculé) {

				// Certains éléments peuvent avoir des informations de dimension si on leur montre de manière invisible
				// mais il doit avoir un style d'affichage actuel qui en profiterait
				return rdisplayswap.test (jQuery.css (elem, "display")) &&

					// Assistance: Safari 8+
					// Les colonnes de table dans Safari ont offsetWidth & zero non nul
					// getBoundingClientRect (). width sauf si l'affichage est modifié.
					// Support: IE <= 11 seulement
					// Exécution de getBoundingClientRect sur un nœud déconnecté
					// dans IE génère une erreur.
					(! elem.getClientRects (). length ||! elem.getBoundingClientRect (). width)?
						swap (elem, cssShow, function () {
							retourne getWidthOrHeight (elem, dimension, extra);
						}):
						getWidthOrHeight (elem, dimension, extra);
			}
		},

		set: fonction (elem, value, extra) {
			allumettes var,
				styles = getStyles (elem),

				// Ne lit que styles.position si le test a une chance d'échouer
				// pour éviter de forcer un reflux.
				scrollboxSizeBuggy =! support.scrollboxSize () &&
					styles.position === "absolu",

				// Pour éviter de forcer un refusion, n'extrayez boxSizing que si nous en avons besoin (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || supplémentaire,
				isBorderBox = boxSizingNeeded &&
					jQuery.css (elem, "boxSizing", false, styles) === "border-box",
				soustraire = extra?
					boxModelAdjustment (
						elem,
						dimension,
						supplémentaire,
						isBorderBox,
						modes
					):
					0;

			// Prendre en compte les dimensions non fiables de la bordure en comparant le décalage * au calcul et
			// simulant un contenu-box pour obtenir une bordure et un rembourrage (gh-3699)
			if (isBorderBox && scrollboxSizeBuggy) {
				soustraire - = Math.ceil (
					elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
					parseFloat (styles [dimension]) -
					boxModelAdjustment (elem, dimension, "border", false, styles) -
					0.5
				)
			}

			// Conversion en pixels si un ajustement de valeur est nécessaire
			if (soustraire && (correspond = rcssNum.exec (valeur)) &&
				(correspond à [3] || "px")! == "px") {

				elem.style [dimension] = valeur;
				valeur = jQuery.css (elem, dimension);
			}

			renvoyer setPositiveNumber (elem, valeur, soustraire);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	fonction (elem, calculée) {
		si (calculé) {
			return (parseFloat (curCSS (elem, "marginLeft"))) ||
				elem.getBoundingClientRect (). left -
					swap (elem, {marginLeft: 0}, function () {
						renvoyer elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
)

// Ces crochets sont utilisés par animate pour développer les propriétés
jQuery.each ({
	marge: "",
	Rembourrage: "",
	largeur de la bordure"
}, fonction (préfixe, suffixe) {
	jQuery.cssHooks [préfixe + suffixe] = {
		expand: fonction (valeur) {
			var i = 0,
				expansé = {},

				// Suppose un nombre unique s'il ne s'agit pas d'une chaîne
				parts = typeof value === "chaîne"? valeur.split (""): [valeur];

			pour (; i <4; i ++) {
				développé [préfixe + cssExpand [i] + suffixe] =
					parties [i] || parties [i - 2] || parties [0];
			}

			retour élargi;
		}
	};

	if (préfixe! == "marge") {
		jQuery.cssHooks [préfixe + suffixe] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: fonction (nom, valeur) {
		retourne l'accès (this, function (elem, name, value) {
			styles var, len,
				map = {},
				i = 0;

			if (Array.isArray (name)) {
				styles = getStyles (elem);
				len = name.length;

				pour (; i <len; i ++) {
					map [nom [i]] = jQuery.css (elem, nom [i], false, styles);
				}

				retourner la carte;
			}

			valeur de retour! == non défini?
				jQuery.style (elem, name, value):
				jQuery.css (elem, name);
		}, nom, valeur, arguments.length> 1);
	}
});


fonction Tween (elem, options, prop, fin, relâchement) {
	retourne le nouveau Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructeur: Tween,
	init: fonction (elem, options, prop, fin, assouplissement, unité) {
		this.elem = elem;
		this.prop = prop;
		this.easing = assouplissement || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur ();
		this.end = end;
		this.unit = unit || (jQuery.cssNumber [prop]? "": "px");
	},
	cur: function () {
		var hooks = Tween.propHooks [this.prop];

		retourne les crochets && hooks.get?
			hooks.get (this):
			Tween.propHooks._default.get (this);
	},
	exécuter: fonction (pourcentage) {
		var facilité,
			hooks = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				pour cent, this.options.duration * pour cent, 0, 1, this.options.duration
			)
		} autre {
			this.pos = eased = pourcent;
		}
		this.now = (this.end - this.start) * accéléré + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (ceci);
		} autre {
			Tween.propHooks._default.set (this);
		}
		retournez ceci;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_défaut: {
		get: fonction (interpolation) {
			résultat var;

			// Utiliser une propriété sur l'élément directement lorsqu'il ne s'agit pas d'un élément DOM,
			// ou lorsqu'il n'y a pas de propriété de style correspondante qui existe.
			if (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = null && tween.elem.style [tween.prop] == null) {
				renvoyer tween.elem [tween.prop];
			}

			// Passer une chaîne vide en tant que 3ème paramètre à .css sera automatiquement
			// tente un parseFloat et se replie sur une chaîne si l'analyse échoue.
			// Les valeurs simples telles que "10px" sont analysées dans Float;
			// les valeurs complexes telles que "rotation (1rad)" sont renvoyées telles quelles.
			resultat = jQuery.css (tween.elem, tween.prop, "");

			// Les chaînes vides, null, undefined et "auto" sont converties en 0.
			return! result || résultat === "auto"? 0: résultat;
		},
		set: fonction (interpolation) {

			// Utilise step hook pour le dos compat.
			// Utilise cssHook s'il est là.
			// Utilisez .style si disponible et utilisez les propriétés simples si elles sont disponibles.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (tween);
			} else if (tween.elem.nodeType === 1 && (
					jQuery.cssHooks [tween.prop] ||
					tween.elem.style [finalPropName (tween.prop)]! = null)) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} autre {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Support: IE <= 9 seulement
// approche basée sur la panique pour configurer des éléments sur des nœuds déconnectés
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: fonction (interpolation) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	linéaire: fonction (p) {
		retourne p;
	},
	swing: fonction (p) {
		retourne 0,5 - Math.cos (p * Math.PI) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Retour compat <1.8 point d'extension
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = / ^ (?: toggle | show | hide) $ /,
	rrun = / queueHooks $ /;

function schedule () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (calendrier);
		} autre {
			window.setTimeout (planning, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// Les animations créées de manière synchrone s'exécutent de manière synchrone
fonction createFxNow () {
	window.setTimeout (function () {
		fxNow = non défini;
	});
	return (fxNow = Date.now ());
}

// Générer des paramètres pour créer une animation standard
fonction genFx (type, includeWidth) {
	var qui,
		i = 0,
		attrs = {hauteur: type};

	// Si nous incluons width, step vaut 1 pour faire toutes les valeurs cssExpand,
	// sinon la valeur de l'étape est 2 pour passer à gauche et à droite
	includeWidth = includeWidth? dix;
	pour (; i <4; i + = 2 - includeWidth) {
		which = cssExpand [i];
		attrs ["marge" + qui] = attrs ["remplissage" + qui] = type;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = type;
	}

	renvoyer les attrs;
}

fonction createTween (valeur, prop, animation) {
	var tween,
		collection = (Animation.tweeners [prop] || []) .concat (Animation.tweeners ["*"]),
		indice = 0,
		longueur = collection.length;
	pour (; index <longueur; index ++) {
		if ((tween = collection [index] .call (animation, prop, valeur)))) {

			// nous en avons fini avec cette propriété
			retourne entre;
		}
	}
}

fonction defaultPrefilter (elem, props, opts) {
	var prop, valeur, bascule, crochets, oldfire, propTween, restoreDisplay, display,
		isBox = "width" dans les accessoires || "hauteur" dans les accessoires,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (elem, "fxshow");

	// Les animations de file d'attente sautent les hooks fx
	si (! opts.queue) {
		hooks = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function () {
				si (! hooks.unqueued) {
					oldfire ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {

			// Assure que le gestionnaire complet est appelé avant la fin.
			anim.always (function () {
				hooks.unqueued--;
				if (! jQuery.queue (elem, "fx") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Détecter afficher / masquer les animations
	pour (accessoire dans les accessoires) {
		valeur = props [prop];
		if (rfxtypes.test (valeur)) {
			supprimer les accessoires [prop];
			bascule = bascule || valeur === "bascule";
			if (valeur === (caché? "masquer": "montrer")) {

				// fait semblant d'être caché s'il s'agit d'un "spectacle" et
				// il y a encore des données d'un show / hide arrêté
				if (valeur === "show" && dataShow && dataShow [prop]! == non défini) {
					caché = vrai;

				// Ignore toutes les autres données d'affichage / masquage non-op
				} autre {
					continuer;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style (elem, prop);
		}
	}

	// Renflouer s'il s'agit d'un no-op comme .hide (). Hide ()
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		revenir;
	}

	// Restreindre les styles "débordement" et "affichage" pendant les animations de boîte
	if (isBox && elem.nodeType === 1) {

		// Support: IE <= 9 - 11, Edge 12 - 15
		// Enregistre les 3 attributs de dépassement car IE ne déduit pas le raccourci
		// from overflowX et overflowY et Edge, à la même valeur, ne font que refléter
		// la valeur overflowX ici.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Identifie un type d'affichage, préférant les anciennes données d'affichage / masquage à la cascade CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (elem, "display");
		}
		display = jQuery.css (elem, "display");
		if (display === "none") {
			if (restoreDisplay) {
				display = restoreDisplay;
			} autre {

				// Obtenir des valeurs non vides en forçant temporairement la visibilité
				showHide ([elem], true);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (elem, "display");
				showHide ([elem]);
			}
		}

		// Animer des éléments en ligne en tant que bloc en ligne
		if (display === "inline" || display === "inline-block" && restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "none") {

				// Restaure la valeur d'affichage d'origine à la fin des animations de masquage / masquage
				si (! propTween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						display = style.display;
						restoreDisplay = display === "aucun"? "" : afficher;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "caché";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// implémenter des animations de show / hide
	propTween = false;
	pour (prop en orig) {

		// Configuration générale afficher / masquer pour cette animation d'élément
		si (! propTween) {
			if (dataShow) {
				if ("hidden" dans dataShow) {
					hidden = dataShow.hidden;
				}
			} autre {
				dataShow = dataPriv.access (elem, "fxshow", {display: restoreDisplay});
			}

			// Store hidden / visible for toggle ainsi `.stop (). Toggle ()` "reverses"
			if (bascule) {
				dataShow.hidden =! hidden;
			}

			// Afficher les éléments avant de les animer
			si (caché) {
				showHide ([elem], true);
			}

			/ * eslint-disable no-loop-func * /

			anim.done (function () {

			/ * eslint-enable no-loop-func * /

				// La dernière étape d'une animation "masquée" masque l'élément
				si (! caché) {
					showHide ([elem]);
				}
				dataPriv.remove (elem, "fxshow");
				pour (prop en orig) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// Configuration par propriété
		propTween = createTween (hidden? dataShow [prop]: 0, prop, anim);
		si (! (prop dans dataShow)) {
			dataShow [prop] = propTween.start;
			si (caché) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

fonction propFilter (props, specialEasing) {
	index, nom, atténuation, valeur, crochets;

	// camelCase, specialEasing et expand cssHook pass
	pour (index dans les accessoires) {
		name = camelCase (index);
		easing = specialEasing [nom];
		valeur = props [index];
		if (Array.isArray (valeur)) {
			assouplissement = valeur [1];
			valeur = props [index] = valeur [0];
		}

		si (index! == nom) {
			props [nom] = valeur;
			delete props [index];
		}

		hooks = jQuery.cssHooks [nom];
		if (crochets && "expand" dans les crochets) {
			valeur = hooks.expand (valeur);
			supprimer les accessoires [nom];

			// Pas tout à fait $ .extend, cela ne remplacera pas les clés existantes.
			// Réutilisation de 'index' car nous avons le "nom" correct
			pour (index en valeur) {
				si (! (index dans les accessoires)) {
					props [index] = valeur [index];
					specialEasing [index] = atténuation;
				}
			}
		} autre {
			specialEasing [nom] = atténuation;
		}
	}
}

fonction Animation (elem, propriétés, options) {
	résultat var,
		arrêté,
		indice = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred (). always (function () {

			// Ne correspond pas à elem dans le sélecteur: animée
			supprimez tick.elem;
		}),
		tick = fonction () {
			si (arrêté) {
				retourne faux;
			}
			var currentTime = fxNow || createFxNow (),
				restant = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Support: Android 2.3 uniquement
				// Un bug de crash archaïque ne nous permet pas d'utiliser `1 - (0.5 || 0)` (# 12497)
				temp = restant / animation.duration || 0
				pourcentage = 1 - temp,
				indice = 0,
				longueur = animation.tweens.length;

			pour (; index <longueur; index ++) {
				animation.tweens [index] .run (pourcentage);
			}

			deferred.notifyWith (elem, [animation, pourcent, restant]);

			// S'il y a plus à faire, céder
			si (pourcentage <1 && longueur) {
				retour restant;
			}

			// S'il s'agissait d'une animation vide, synthétiser une notification de progression finale
			si (! longueur) {
				deferred.notifyWith (elem, [animation, 1, 0]);
			}

			// Résoudre l'animation et rapporter sa conclusion
			deferred.resolveWith (elem, [animation]);
			retourne faux;
		},
		animation = deferred.promise ({
			elem: elem,
			props: jQuery.extend ({}, propriétés),
			opts: jQuery.extend (true, {
				specialEasing: {},
				Accélération: jQuery.easing._default
			}, options),
			originalProperties: propriétés,
			originalOptions: options,
			startTime: fxNow || createFxNow (),
			durée: options.duration,
			tweens: [],
			createTween: fonction (prop, fin) {
				var tween = jQuery.Tween (elem, animation.opts, prop, end,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (interpolation);
				retourne entre;
			},
			stop: function (gotoEnd) {
				var index = 0,

					// Si nous allons à la fin, nous voulons exécuter tous les tweens
					// sinon on saute cette partie
					longueur = gotoEnd? animation.tweens.length: 0;
				si (arrêté) {
					retournez ceci;
				}
				arrêté = vrai;
				pour (; index <longueur; index ++) {
					animation.tweens [index] .run (1);
				}

				// Résoudre quand nous avons joué la dernière image; sinon, rejette
				si (gotoEnd) {
					deferred.notifyWith (elem, [animation, 1, 0]);
					deferred.resolveWith (elem, [animation, gotoEnd]);
				} autre {
					deferred.rejectWith (elem, [animation, gotoEnd]);
				}
				retournez ceci;
			}
		}),
		props = animation.props;

	propFilter (props, animation.opts.specialEasing);

	pour (; index <longueur; index ++) {
		resultat = Animation.prefilters [index] .call (animation, elem, props, animation.opts);
		si (résultat) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (result);
			}
			retourne le résultat;
		}
	}

	jQuery.map (props, createTween, animation);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (elem, animation);
	}

	// Attacher des callbacks depuis les options
	animation
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		. toujours (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (tick, {
			elem: elem,
			anim: animation,
			file d'attente: animation.opts.queue
		})
	)

	retourner l'animation;
}

jQuery.Animation = jQuery.extend (Animation, {

	tweeners: {
		"*": [fonction (prop, valeur) {
			var tween = this.createTween (prop, valeur);
			adjustCSS (tween.elem, prop, rcssNum.exec (valeur), tween);
			retourne entre;
		}]
	},

	tweener: fonction (accessoires, rappel) {
		if (isFunction (props)) {
			callback = props;
			props = ["*"];
		} autre {
			props = props.match (rnothtmlwhite);
		}

		var prop,
			indice = 0,
			length = props.length;

		pour (; index <longueur; index ++) {
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift (rappel);
		}
	},

	préfiltres: [defaultPrefilter],

	préfiltre: fonction (rappel, préfixe) {
		si (préfixe) {
			Animation.prefilters.unshift (rappel);
		} autre {
			Animation.prefilters.push (rappel);
		}
	}
});

jQuery.speed = fonction (vitesse, atténuation, fn) {
	var opt = vitesse && typeof vitesse === "objet"? jQuery.extend ({}, vitesse): {
		complète: fn || ! fn && easing ||
			isFunction (vitesse) && vitesse,
		durée: vitesse,
		assouplissement: fn && assouplissement || assouplissement &&! isFunction (assouplissement) && assouplissement
	};

	// Va à la fin si fx est éteint
	if (jQuery.fx.off) {
		opt.duration = 0;

	} autre {
		if (typeof opt.duration! == "numéro") {
			if (opt.duration dans jQuery.fx.speeds) {
				opt.duration = jQuery.fx.speeds [opt.duration];

			} autre {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalise opt.queue - true / undefined / null -> "fx"
	if (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// faire la queue
	opt.old = opt.complete;

	opt.complete = function () {
		if (isFunction (opt.old)) {
			opt.old.call (this);
		}

		si (opt.queue) {
			jQuery.dequeue (this, opt.queue);
		}
	};

	retour opt;
};

jQuery.fn.extend ({
	fadeTo: fonction (vitesse, relâchement, rappel) {

		// Afficher tous les éléments cachés après avoir défini l'opacité sur 0
		Renvoie this.filter (isHiddenWithinTree) .css ("opacity", 0) .show ()

			// Animer à la valeur spécifiée
			.end (). animate ({opacity: to}, rapidité, accélération, rappel);
	},
	animate: fonction (prop, vitesse, relâchement, rappel) {
		var empty = jQuery.isEmptyObject (prop),
			optall = jQuery.speed (vitesse, atténuation, rappel),
			doAnimation = function () {

				// Opère sur une copie de l'accessoire afin que l'assouplissement par propriété ne soit pas perdu
				var anim = Animation (this, jQuery.extend ({}, prop), optall);

				// Des animations vides, ou une finition est résolue immédiatement
				if (vide || dataPriv.get (this, "finish")) {
					anim.stop (true);
				}
			};
			doAnimation.finish = doAnimation;

		retour vide || optall.queue === false?
			this.each (doAnimation):
			this.queue (optall.queue, doAnimation);
	},
	stop: fonction (type, clearQueue, gotoEnd) {
		var stopQueue = fonction (crochets) {
			var stop = hooks.stop;
			supprimer les hooks.stop;
			stop (gotoEnd);
		};

		if (typeof type! == "chaîne") {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = non défini;
		}
		if (clearQueue && type! == false) {
			this.queue (tapez || "fx", []);
		}

		retourne this.each (function () {
			var dequeue = true,
				index = type! = null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get (this);

			si (index) {
				if (data [index] && data [index] .stop) {
					stopQueue (data [index]);
				}
			} autre {
				pour (index dans les données) {
					if (data [index] && data [index] .stop && rrun.test (index)) {
						stopQueue (data [index]);
					}
				}
			}

			pour (index = timers.length; index--;) {
				if (timers [index] .elem === this &&
					(type == null || timers [index] .queue === type)) {

					timers [index] .anim.stop (gotoEnd);
					dequeue = false;
					timers.splice (index, 1);
				}
			}

			// Commence le suivant dans la file d'attente si la dernière étape n'a pas été forcée.
			// Les timers appellent actuellement leurs rappels complets, qui
			// sera retiré de la file d'attente, mais seulement s'ils étaient gotoEnd.
			if (dequeue ||! gotoEnd) {
				jQuery.dequeue (this, type);
			}
		});
	},
	finish: fonction (type) {
		si (tapez! == faux) {
			type = type || "fx";
		}
		retourne this.each (function () {
			index var,
				data = dataPriv.get (this),
				queue = data [type + "queue"],
				hooks = data [type + "queueHooks"],
				timers = jQuery.timers,
				longueur = file d'attente? queue.longueur: 0;

			// Activer l'indicateur de finition sur les données privées
			data.finish = true;

			// Vide d'abord la file d'attente
			jQuery.queue (this, tapez, []);

			if (hooks && hooks.stop) {
				hooks.stop.call (this, true);
			}

			// Recherchez les animations actives et terminez-les.
			pour (index = timers.length; index--;) {
				if (timers [index] .elem === this && timers [index] .queue === type) {
					timers [index] .anim.stop (true);
					timers.splice (index, 1);
				}
			}

			// Rechercher les animations dans l'ancienne file d'attente et les terminer
			pour (index = 0; index <longueur; index ++) {
				if (queue [index] && queue [index] .finish) {
					queue [index] .finish.call (this);
				}
			}

			// Désactive le drapeau de finition
			supprimer data.finish;
		});
	}
});

jQuery.each (["toggle", "show", "hide"], fonction (i, nom) {
	var cssFn = jQuery.fn [nom];
	jQuery.fn [nom] = fonction (vitesse, accélération, rappel) {
		vitesse de retour == null || typeof speed === "booléen"?
			cssFn.apply (this, arguments):
			this.animate (genFx (nom, vrai), vitesse, atténuation, rappel);
	};
});

// Générer des raccourcis pour des animations personnalisées
jQuery.each ({
	slideDown: genFx ("show"),
	slideUp: genFx ("masquer"),
	slideToggle: genFx ("bascule"),
	fadeIn: {opacity: "show"},
	fadeOut: {opacity: "hide"},
	fadeToggle: {opacity: "toggle"}
}, fonction (nom, accessoires) {
	jQuery.fn [nom] = fonction (vitesse, accélération, rappel) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );