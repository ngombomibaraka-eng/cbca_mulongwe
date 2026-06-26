// CONNAISSANCES DE L'ASSISTANT
const knowledgeBase = [
  // ===== SALUTATIONS =====
  {
    keywords: ["bonjour", "salut", "bonsoir", "hello"],
    answer: "Bonjour 🙏 Soyez le bienvenu à la 3è CBCA Mulongwe. Je suis ici pour vous aider à approfondir votre foi et connaître la Parole de Dieu. Comment puis-je vous assister aujourd'hui ?"
  },

  {
    keywords: ["merci"],
    answer: "Avec joie 🙏 Que la grâce du Seigneur Jésus-Christ, l'amour de Dieu et la communion du Saint-Esprit soient avec vous ! (2 Corinthiens 13:13)"
  },

  // ===== IDENTITÉ DE L'ÉGLISE =====
  {
    keywords: ["eglise", "cbca", "qui êtes-vous", "presentation"],
    answer: "La 3è CBCA Mulongwe est une communauté chrétienne située en RDC, engagée dans la prédication de l'Évangile, la prière et le service communautaire. Comme dit l'apôtre Paul: 'Vous êtes le corps du Christ, et vous êtes ses membres, chacun pour sa part.' (1 Corinthiens 12:27)"
  },

  {
    keywords: ["mission", "vision"],
    answer: "Notre mission est de propager l'Évangile, former des disciples et servir la communauté avec amour et foi, conformément au mandat de Jésus: 'Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.' (Matthieu 28:19)"
  },

  // ===== LOCALISATION =====
  {
    keywords: ["adresse", "localisation", "où", "situe", "trouver"],
    answer: "Nous sommes situés à Mulongwe, Avenue du 30 juin, Quartier ROMBE1. Comme il est écrit: 'Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.' (Matthieu 18:20)"
  },

  // ===== CONTACT =====
  {
    keywords: ["contact", "numero", "telephone", "appeler"],
    answer: "Vous pouvez nous contacter au +243 970096597 ou via notre page contact. N'hésitez pas à nous joindre pour toute question spirituelle ou pratique."
  },

  {
    keywords: ["email", "mail"],
    answer: "Notre adresse email est : cbcamulongwe@gmail.com. Nous serons heureux de répondre à vos questions."
  },

  // ===== CULTES =====
  {
    keywords: ["culte dimanche", "culte", "dimanche"],
    answer: "Le culte principal a lieu chaque dimanche de 08h00 à 11h30. 'Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.' (Matthieu 18:20)"
  },

  {
    keywords: ["matinale", "culte matin", "priere matin"],
    answer: "Les cultes matinaux se tiennent du lundi au samedi de 5h30 à 6h10. 'Le matin, fais entendre ta bonté, car je me confie en toi.' (Psaume 143:8)"
  },

  {
    keywords: ["samedi culte"],
    answer: "Chaque samedi, nous rendons visite aux membres de l'église de 6h00 à 7h00, suivant l'exemple des premiers chrétiens qui 'se réunissaient chaque jour dans le temple, et ils rompaient le pain dans les maisons.' (Actes 2:46)"
  },

  // ===== PRIÈRE =====
  {
    keywords: ["priere", "prière", "intercession"],
    answer: "La rencontre de prière se tient chaque vendredi à 16h00. 'Priez sans cesse.' (1 Thessaloniciens 5:17)"
  },

  // ===== ECOLE DU DIMANCHE =====
  {
    keywords: ["ecole dimanche", "enfant", "jeunes", "ado"],
    answer: "L'école du dimanche commence à 7h00 pour les enfants, adolescents et jeunes adultes. 'Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.' (Proverbes 22:6)"
  },

  // ===== GROUPES =====
  {
    keywords: ["groupe", "maison", "etude biblique"],
    answer: "Les groupes de maison se réunissent chaque jeudi à 18h30 pour l'étude biblique. 'Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain, et dans les prières.' (Actes 2:42)"
  },

  // ===== CHORALES =====
  {
    keywords: ["chorale", "musique", "louange"],
    answer: "Nos chorales incluent : Umoja, Mwamga mkuu, Women et Wokovu. Répétitions dimanche à 12h30 et samedi à 15h00. 'Chantez à l'Éternel un cantique nouveau! Chantez à l'Éternel, vous tous, habitants de la terre!' (Psaume 96:1)"
  },

  // ===== ENFANTS =====
  {
    keywords: ["enfants", "ministere enfants"],
    answer: "Le ministère des enfants propose des activités spirituelles et éducatives chaque dimanche matin. 'Laissez les petits enfants venir à moi, et ne les en empêchez pas; car le royaume de Dieu est pour ceux qui leur ressemblent.' (Marc 10:14)"
  },

  // ===== EVENEMENTS =====
  {
    keywords: ["conference", "reveil", "evenement", "programme"],
    answer: "Nous organisons régulièrement des conférences, camps, journées spirituelles et actions communautaires. 'Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.' (Matthieu 18:20)"
  },

  {
    keywords: ["camp jeunesse", "jeunesse"],
    answer: "Le camp jeunesse 'Génération Impact' aura lieu du 10 au 13 juillet 2026. 'Jeune homme, je t'écris, parce que tu es fort, et que la parole de Dieu demeure en toi.' (1 Jean 2:14)"
  },

  {
    keywords: ["femme", "journee femme"],
    answer: "La journée de la femme chrétienne est prévue le 31 mai 2026 avec enseignements et prière. 'La femme sage bâtit sa maison, et la femme insensée la renverse de ses propres mains.' (Proverbes 14:1)"
  },

  // ===== GALERIE =====
  {
    keywords: ["photo", "galerie", "images"],
    answer: "Vous pouvez consulter notre galerie pour voir les moments de culte, événements et activités de l'église. 'Nous nous glorifions même dans les tribulations, sachant que la tribulation produit la persévérance.' (Romains 5:3)"
  },

  // ===== AIDE GENERALE =====
  {
    keywords: ["aide", "help", "musahada"],
    answer: "Je peux vous aider avec : horaires des cultes, contact, localisation, événements, chorales, activités, mais aussi avec l'étude de la Bible, des versets par thème, des explications de passages bibliques, et des plans de lecture. Que souhaitez-vous explorer ?"
  },

  // ===== NOUVELLE SECTION: ÉTUDE BIBLIQUE =====
  
  // --- Livres de la Bible ---
  {
    keywords: ["genese", "genesis", "premier livre"],
    answer: "La Genèse est le premier livre de la Bible, écrit par Moïse. Il raconte la création du monde, la chute de l'homme, le déluge, et l'histoire des patriarches comme Abraham, Isaac et Jacob. Thème principal: Dieu est le créateur et souverain de l'univers qui initie une relation avec l'humanité. 'Au commencement, Dieu créa les cieux et la terre.' (Genèse 1:1)"
  },
  
  {
    keywords: ["exode", "sortie d'egypte"],
    answer: "L'Exode raconte la délivrance des Israélites de l'esclavage en Égypte sous la direction de Moïse, et la réception de la loi au mont Sinaï. Thème principal: Dieu est le libérateur qui fait alliance avec son peuple. 'Je suis l'Éternel, ton Dieu, qui t'ai fait sortir du pays d'Égypte, de la maison de servitude.' (Exode 20:2)"
  },
  
  {
    keywords: ["psaumes", "cantiques", "louanges"],
    answer: "Le livre des Psaumes est une collection de 150 poèmes et chants utilisés pour la louange, la prière et la méditation. Beaucoup ont été écrits par le roi David. Ils expriment toute la gamme des émotions humaines dans la relation avec Dieu. 'Louez l'Éternel, car il est bon, car sa miséricorde dure à toujours!' (Psaume 136:1)"
  },
  
  {
    keywords: ["evangile", "matthieu", "marc", "luc", "jean"],
    answer: "Les quatre Évangiles (Matthieu, Marc, Luc et Jean) racontent la vie, le ministère, la mort et la résurrection de Jésus-Christ. Matthieu présente Jésus comme le Roi des Juifs, Marc comme le Serviteur, Luc comme le Fils de l'homme, et Jean comme le Fils de Dieu. 'Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.' (Jean 3:16)"
  },
  
  {
    keywords: ["actes des apotres", "actes", "eglise primitive"],
    answer: "Les Actes des Apôtres, écrits par Luc, racontent l'expansion de l'Église primitive après l'ascension de Jésus, sous la direction du Saint-Esprit. Il met particulièrement en lumière les ministères de Pierre et Paul. 'Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.' (Actes 1:8)"
  },
  
  {
    keywords: ["romains", "epitre aux romains"],
    answer: "L'épître aux Romains, écrite par l'apôtre Paul, est l'une des présentations les plus complètes de la théologie chrétienne. Elle explique la justification par la foi, la grâce de Dieu, et la vie dans l'Esprit. 'Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.' (Éphésiens 2:8 - thème similaire)"
  },
  
  {
    keywords: ["apocalypse", "revelation", "fin des temps"],
    answer: "L'Apocalypse, écrite par l'apôtre Jean, est un livre prophétique qui révèle la victoire finale du Christ sur le mal et l'établissement du nouveau ciel et de la nouvelle terre. 'Je suis l'Alpha et l'Oméga, le premier et le dernier, le commencement et la fin.' (Apocalypse 22:13)"
  },

  // --- Personnages bibliques ---
  {
    keywords: ["abraham", "pere des croyants"],
    answer: "Abraham est considéré comme le père de la foi. Dieu l'a appelé à quitter son pays pour aller vers une terre promise, et lui a promis une descendance nombreuse malgré sa vieillesse. 'Abraham crut à l'Éternel, et cela lui fut imputé à justice.' (Genèse 15:6)"
  },
  
  {
    keywords: ["moise", "liberateur"],
    answer: "Moïse a été choisi par Dieu pour libérer les Israélites de l'esclavage en Égypte et pour recevoir la loi au mont Sinaï. Il a conduit le peuple pendant 40 ans dans le désert. 'Maintenant, va, je t'enverrai auprès de Pharaon, et tu feras sortir d'Égypte mon peuple, les enfants d'Israël.' (Exode 3:10)"
  },
  
  {
    keywords: ["david", "roi david", "psalmiste"],
    answer: "David était un berger devenu roi d'Israël, décrit comme un homme selon le cœur de Dieu. Il a écrit de nombreux Psaumes et a établi Jérusalem comme capitale. 'J'ai trouvé David, fils d'Isaï, homme selon mon cœur, qui accomplira toutes mes volontés.' (Actes 13:22)"
  },
  
  {
    keywords: ["jesus", "christ", "seigneur", "fils de dieu"],
    answer: "Jésus-Christ est le centre de la foi chrétienne, Fils de Dieu devenu homme pour sauver l'humanité du péché. Il a enseigné l'amour, accompli des miracles, est mort sur la croix et est ressuscité. 'Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.' (Jean 14:6)"
  },
  
  {
    keywords: ["paul", "apotre paul", "saul"],
    answer: "L'apôtre Paul, d'abord persécuteur des chrétiens sous le nom de Saul, a rencontré Jésus sur le chemin de Damas et est devenu le plus grand missionnaire du christianisme primitif, écrivant de nombreuses épîtres. 'Car je sais en qui j'ai cru, et je suis persuadé qu'il a la puissance de garder mon dépôt jusqu'à ce jour-là.' (2 Timothée 1:12)"
  },
  
  {
    keywords: ["marie", "vierge marie", "mere de jesus"],
    answer: "Marie, mère de Jésus, a été choisie par Dieu pour porter le Fils de Dieu dans son sein. Elle a répondu avec foi à l'annonce de l'ange Gabriel. 'Voici la servante du Seigneur; qu'il me soit fait selon ta parole!' (Luc 1:38)"
  },
  
  {
    keywords: ["pierre", "apotre pierre", "simon pierre"],
    answer: "Simon Pierre était un pêcheur devenu l'un des douze apôtres de Jésus. Il a proclamé que Jésus est le Christ, a marché sur l'eau, mais a aussi renié Jésus trois fois avant de se repentir. 'Tu es le Christ, le Fils du Dieu vivant.' (Matthieu 16:16)"
  },

  // --- Thèmes bibliques ---
  {
    keywords: ["amour", "aimer"],
    answer: "L'amour est au cœur du message biblique. Dieu est amour, et il nous a montré cet amour en envoyant Jésus. Nous sommes appelés à aimer Dieu et notre prochain. 'Dieu est amour; et celui qui demeure dans l'amour demeure en Dieu, et Dieu demeure en lui.' (1 Jean 4:16) 'Aimez-vous les uns les autres; comme je vous ai aimés, vous aussi, aimez-vous les uns les autres.' (Jean 13:34)"
  },
  
  {
    keywords: ["grace", "faveur divine"],
    answer: "La grâce est la faveur imméritée de Dieu envers les pécheurs. Le salut ne peut être obtenu par les œuvres mais uniquement par la grâce de Dieu reçue par la foi. 'Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.' (Éphésiens 2:8)"
  },
  
  {
    keywords: ["foi", "croire", "croyance"],
    answer: "La foi est la confiance en Dieu et en ses promesses, même sans voir. Elle est essentielle pour le salut et la vie chrétienne. 'La foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.' (Hébreux 11:1) 'Sans la foi il est impossible de lui être agréable.' (Hébreux 11:6)"
  },
  
  {
    keywords: ["pardon", "pardonner", "repentance"],
    answer: "Le pardon est un thème central de la Bible. Dieu pardonne nos péchés lorsque nous nous repentons, et nous sommes appelés à pardonner aux autres. 'Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité.' (1 Jean 1:9) 'Pardonne-nous nos offenses, comme nous aussi nous pardonnons à ceux qui nous ont offensés.' (Matthieu 6:12)"
  },
  
  {
    keywords: ["salut", "sauver", "sauvetage"],
    answer: "Le salut est la délivrance du péché et de ses conséquences, accomplie par la mort et la résurrection de Jésus-Christ. Il est reçu par la foi. 'Car il n'y a sous le ciel aucun autre nom qui ait été donné parmi les hommes, par lequel nous devions être sauvés.' (Actes 4:12)"
  },
  
  {
    keywords: ["saint esprit", "esprit saint", "consolateur"],
    answer: "Le Saint-Esprit est la troisième personne de la Trinité. Il convainc de péché, régénère, habite les croyants, les guide et leur donne des dons pour le service. 'Mais le consolateur, le Saint-Esprit, que le Père enverra en mon nom, vous enseignera toutes choses, et vous rappellera tout ce que je vous ai dit.' (Jean 14:26)"
  },
  
  {
    keywords: ["trinite", "triplite", "pere fils saint esprit"],
    answer: "La Trinité est la doctrine chrétienne selon laquelle Dieu est un en trois personnes: le Père, le Fils et le Saint-Esprit. Ce concept n'est pas explicitement formulé dans la Bible mais est déduit de passages qui révèlent la divinité de chaque personne. 'Allez donc, et faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.' (Matthieu 28:19)"
  },
  
  {
    keywords: ["priere", "prier", "communion avec dieu"],
    answer: "La prière est la communication avec Dieu, incluant l'adoration, la confession, la gratitude et les supplications. Jésus a donné le modèle du Notre Père. 'Priez sans cesse.' (1 Thessaloniciens 5:17) 'Ne vous inquiétez de rien; en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.' (Philippiens 4:6)"
  },
  
  {
    keywords: ["decuple", "dime", "dixieme"],
    answer: "La dîme est le principe de donner un dixième de ses revenus à Dieu. Bien qu'elle trouve son origine dans l'Ancien Testament, beaucoup de chrétiens la pratiquent comme un acte de foi et de reconnaissance de la souveraineté de Dieu. 'Apportez à la maison du trésor toutes les dîmes... Mettez-moi à l'épreuve, dit l'Éternel des armées. Et vous verrez si je n'ouvre pas pour vous les écluses des cieux.' (Malachie 3:10)"
  },
  
  {
    keywords: ["bapteme", "baptiser", "immersion"],
    answer: "Le baptême est le symbole extérieur d'une transformation intérieure. Il représente la mort, l'ensevelissement et la résurrection avec Christ. Il est un acte d'obéissance et de témoignage public. 'Celui qui croira et qui sera baptisé sera sauvé.' (Marc 16:16) 'Nous avons donc été ensevelis avec lui par le baptême en sa mort.' (Romains 6:4)"
  },
  
  {
    keywords: ["saintete", "saint", "sanctification"],
    answer: "La sainteté est la séparation du péché et la consécration à Dieu. Les croyants sont appelés à être saints comme Dieu est saint. C'est un processus progressif appelé sanctification. 'Comme des enfants obéissants, ne vous conformez pas aux convoitises que vous aviez autrefois, quand vous étiez dans l'ignorance. Mais, comme celui qui vous a appelés est saint, vous aussi soyez saints dans toute votre conduite.' (1 Pierre 1:14-15)"
  },
  
  {
    keywords: ["esperance", "espoir", "avenir"],
    answer: "L'espérance chrétienne n'est pas un simple souhait, mais une assurance fondée sur les promesses de Dieu, particulièrement la résurrection et la vie éternelle. 'Nous sommes sauvés par l'espérance. Or l'espérance qu'on voit n'est plus espérance: ce qu'on voit, peut-on l'espérer encore?' (Romains 8:24) 'Jésus-Christ est notre espérance.' (1 Timothée 1:1)"
  },

  // --- Versets par situations de vie ---
  {
    keywords: ["peur", "angoisse", "inquietude", "anxiete"],
    answer: "La Bible offre de nombreux réconforts face à la peur: 'Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.' (Ésaïe 41:10) 'C'est la paix que je vous laisse, c'est ma paix que je vous donne; je ne vous la donne pas comme le monde la donne. Que votre cœur ne se trouble point.' (Jean 14:27)"
  },
  
  {
    keywords: ["tristesse", "deuil", "douleur", "souffrance"],
    answer: "Dieu est proche de ceux qui souffrent: 'L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement.' (Psaume 34:19) 'Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur.' (Apocalypse 21:4)"
  },
  
  {
    keywords: ["maladie", "sante", "guerison", "malade"],
    answer: "La Bible montre que Dieu peut guérir, mais aussi que la souffrance peut avoir un sens spirituel: 'Mon fils, ne méprise pas la correction de l'Éternel, et ne t'effraie pas de ses châtiments; car l'Éternel châtie celui qu'il aime.' (Proverbes 3:11-12) 'quelqu'un parmi vous est-il malade? Qu'il appelle les anciens de l'Église, et que les anciens prient pour lui, en l'oignant d'huile au nom du Seigneur.' (Jacques 5:14)"
  },
  
  {
    keywords: ["argent", "finance", "pauvrete", "richesse"],
    answer: "La Bible enseigne une saine attitude envers l'argent: 'L'amour de l'argent est la racine de tous les maux.' (1 Timothée 6:10) 'Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.' (Matthieu 6:33) 'Donnez, et il vous sera donné.' (Luc 6:38)"
  },
  
  {
    keywords: ["conflict", "dispute", "reconciliation", "pardonner"],
    answer: "La Bible donne des principes pour résoudre les conflits: 'Si ton frère a péché, va et reprends-le seul à seul. S'il t'écoute, tu as gagné ton frère.' (Matthieu 18:15) 'Que le soleil ne se couche pas sur votre colère.' (Éphésiens 4:26) 'Supportez-vous les uns les autres, et pardonnez-vous réciproquement, si quelqu'un a à se plaindre de l'autre; comme le Christ vous a pardonné, vous aussi, faites de même.' (Colossiens 3:13)"
  },
  
  {
    keywords: ["tentation", "peche", "chute", "faute"],
    answer: "Face à la tentation, la Bible offre des promesses et des conseils: 'Aucune tentation ne vous est survenue qui n'ait été humaine, et Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au-delà de vos forces; mais avec la tentation il préparera aussi le moyen d'en sortir, afin que vous puissiez la supporter.' (1 Corinthiens 10:13) 'Soumettez-vous donc à Dieu; résistez au diable, et il fuira loin de vous.' (Jacques 4:7)"
  },
  
  {
    keywords: ["mort", "deces", "mourir", "cimetiere"],
    answer: "La Bible offre une perspective unique sur la mort: 'Jésus lui dit: Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort.' (Jean 11:25) 'Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.' (Romains 6:23) 'Nous sommes tous, en effet, comme des Éphémères, nous sommes comme une ombre.' (1 Chroniques 29:15)"
  },
  
  {
    keywords: ["decouragement", "fatigue", "lassitude", "abandon"],
    answer: "Dieu renforce ceux qui sont découragés: 'Ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; ils courent, et ne se lassent point, ils marchent, et ne se fatiguent point.' (Ésaïe 40:31) 'Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.' (Matthieu 11:28)"
  },
  
  {
    keywords: ["famille", "mariage", "enfant", "parent"],
    answer: "La Bible donne des principes pour la famille: 'Que le mariage soit honoré de tous, et le lit conjugal exempt de souillure.' (Hébreux 13:4) 'Enfants, obéissez à vos parents selon le Seigneur, car cela est juste. Pères, n'irritez pas vos enfants, mais élevez-les en les corrigeant et en les instruisant selon le Seigneur.' (Éphésiens 6:1,4)"
  },
  
  {
    keywords: ["travail", "emploi", "profession", "metier"],
    answer: "La Bible valorise le travail honnête: 'Que celui qui vole ne vole plus; mais plutôt qu'il travaille, en faisant de ses mains ce qui est bien, afin d'avoir de quoi donner à celui qui est dans le besoin.' (Éphésiens 4:28) 'Tout ce que vous faites, faites-le de bonne grâce, comme pour le Seigneur et non pour des hommes.' (Colossiens 3:23)"
  },

  // --- Plans de lecture bibliques ---
  {
    keywords: ["plan lecture", "lire bible", "comment lire bible"],
    answer: "Voici quelques plans de lecture bibliques suggérés:\n\n1. Plan débutant (6 mois): Un chapitre par jour, commençant par Jean, puis Genèse, Psaumes, Proverbes, et Romains.\n\n2. Plan chronologique (1 an): Lire la Bible dans l'ordre historique des événements.\n\n3. Plan thématique (1 an): Chaque mois explore un thème différent (amour, prière, foi, etc.).\n\n4. Plan Nouveau Testament (3 mois): Concentrez-vous sur le Nouveau Testament.\n\n'Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.' (Psaume 119:105)"
  },
  
  {
    keywords: ["meditation", "mediter", "reflection biblique"],
    answer: "La méditation biblique consiste à réfléchir profondément sur un passage pour en extraire la signification et l'appliquer à sa vie: 'Je médite sur toutes tes œuvres, je réfléchis à tes hauts faits.' (Psaume 77:12) Méthode suggérée: Lisez un passage court 3 fois, notez ce qui attire votre attention, posez des questions sur le texte, réfléchissez à comment l'appliquer, et priez en fonction de ce que vous avez appris."
  },

  // --- Histoire biblique ---
  {
    keywords: ["creation", "adam", "eve", "paradis"],
    answer: "La création est le début de l'histoire biblique: Dieu a créé le monde en six jours et a fait l'homme et la femme à son image. Ils vivaient en parfaite communion avec Dieu dans le jardin d'Éden, mais ont désobéi à Dieu en mangeant le fruit défendu, introduisant le péché dans le monde. 'Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme.' (Genèse 1:27)"
  },
  
  {
    keywords: ["deluge", "noe", "arche", "inondation"],
    answer: "Le déluge est un événement où Dieu a envoyé un grand déluge sur la terre pour punir la méchanceté humaine, mais a sauvé Noé et sa famille dans une arche. Après le déluge, Dieu a fait alliance avec Noé, promettant de ne plus détruire la terre par un déluge. 'Je mettrai mon arc dans les nuées, et il servira de signe d'alliance entre moi et la terre.' (Genèse 9:13)"
  },
  
  {
    keywords: ["exode", "sortie egypte", "passe mer rouge"],
    answer: "L'Exode est la délivrance miraculeuse des Israélites de l'esclavage en Égypte sous la direction de Moïse. Dieu a envoyé dix plaies sur l'Égypte, puis a ouvert la mer Rouge pour que le peuple passe à sec, tandis que l'armée égyptienne était engloutie. 'L'Éternel combattit pour Israël.' (Exode 14:25)"
  },
  
  {
    keywords: ["ten commandements", "decalogue", "commandements"],
    answer: "Les dix commandements ont été donnés par Dieu à Moïse sur le mont Sinaï après la sortie d'Égypte. Ils incluent: pas d'autres dieux, pas d'idoles, ne pas prendre le nom de Dieu en vain, observer le sabbat, honorer les parents, ne pas tuer, ne pas commettre d'adultère, ne pas voler, ne pas porter de faux témoignage, et ne pas convoiter. 'Écris ces paroles; car c'est conformément à ces paroles que je fais alliance avec toi et avec Israël.' (Exode 34:27)"
  },
  
  {
    keywords: ["promesse terre", "terre promise", "canaan", "jourdain"],
    answer: "La terre promise était le pays de Canaan que Dieu avait promis à Abraham et à sa descendance. Après 40 ans dans le désert, les Israélites ont traversé le Jourdain sous la direction de Josué pour conquérir cette terre. 'Tout lieu que foulera la plante de votre pied, je vous le donne, comme je l'ai dit à Moïse.' (Josué 1:3)"
  },
  
  {
    keywords: ["temple", "salomon", "jerusalem"],
    answer: "Le temple de Jérusalem a été construit par le roi Salomon comme lieu permanent pour l'adoration de Dieu et le stockage de l'arche de l'alliance. Il a remplacé le tabernacle mobile utilisé dans le désert. 'La gloire de l'Éternel remplit la maison.' (1 Rois 8:11)"
  },
  
  {
    keywords: ["exil", "babylone", "captivite", "deportation"],
    answer: "L'exil babylonien a eu lieu lorsque le royaume de Juda a été conquis par Babylone, et beaucoup de Juifs ont été déportés. Cette période a duré environ 70 ans, comme l'avait prophétisé Jérémie. Après l'exil, certains sont retournés à Jérusalem pour reconstruire le temple. 'Toute cette terre deviendra un désert, un lieu de ravage, et ces nations seront asservies au roi de Babylone pendant soixante-dix ans.' (Jérémie 25:11)"
  },
  
  {
    keywords: ["naissance jesus", "noel", "bethlehem", "creche"],
    answer: "La naissance de Jésus a eu lieu à Bethléem, comme prophétisé. Marie et Joseph s'y étaient rendus pour un recensement. Jésus est né dans une étable car il n'y avait pas de place dans l'hébergement, et des bergers guidés par des anges sont venus l'adorer. 'Et toi, Bethléem, terre de Juda, tu n'es certes pas la plus petite parmi les principales villes de Juda, car de toi sortira un chef qui paîtra Israël, mon peuple.' (Matthieu 2:6)"
  },
  
  {
    keywords: ["resurrection", "tombeau vide", "pques", "troisieme jour"],
    answer: "La résurrection de Jésus est l'événement central de la foi chrétienne. Trois jours après sa crucifixion, le tombeau a été trouvé vide par les femmes, et Jésus est apparu à ses disciples à plusieurs reprises avant son ascension. 'Il n'est point ici; il est ressuscité, comme il l'avait dit.' (Matthieu 28:6) 'Si Christ n'est pas ressuscité, votre foi est vaine.' (1 Corinthiens 15:17)"
  },
  
  {
    keywords: ["pentecote", "saint esprit descendu", "langues"],
    answer: "La Pentecôte a eu lieu cinquante jours après Pâques, lorsque le Saint-Esprit est descendu sur les disciples réunis à Jérusalem, comme Jésus l'avait promis. Ils ont commencé à parler en d'autres langues, et environ 3 000 personnes se sont converties ce jour-là, marquant la naissance de l'Église. 'Ils furent tous remplis du Saint-Esprit, et ils se mirent à parler en d'autres langues, selon que l'Esprit leur donnait de s'exprimer.' (Actes 2:4)"
  },

  // --- Paraboles de Jésus ---
  {
    keywords: ["parabole", "semence", "semeur"],
    answer: "Dans la parabole du semeur, Jésus compare la Parole de Dieu à des semences jetées dans différents types de sols: le bord du chemin (volée par l'ennemi), les endroits rocailleux (sans racine), les épines (étouffée par les soucis du monde), et la bonne terre (qui produit du fruit). 'Celui qui a été semé dans la bonne terre, c'est celui qui entend la parole et la comprend; il porte du fruit, et produit tantôt cent, tantôt soixante, tantôt trente.' (Matthieu 13:23)"
  },
  
  {
    keywords: ["parabole", "fils prodigue", "enfant perdu"],
    answer: "La parabole du fils prodigue raconte l'histoire d'un jeune homme qui demande sa part d'héritage, gaspille tout dans une vie de désordre, puis revient repentant chez son père qui l'accueille avec joie. Elle illustre l'amour et le pardon de Dieu. 'Car mon fils que voilà était mort, et il est revenu à la vie; il était perdu, et il est retrouvé.' (Luc 15:24)"
  },
  
  {
    keywords: ["parabole", "bon samaritain", "voisin"],
    answer: "La parabole du bon Samaritain raconte comment un homme blessé est ignoré par un prêtre et un lévite, mais soigné par un Samaritain (considéré comme ennemi des Juifs). Jésus l'utilise pour enseigner qui est notre prochain. 'Va, et toi, fais de même.' (Luc 10:37)"
  },
  
  {
    keywords: ["parabole", "talents", "piece d'or", "serviteurs"],
    answer: "Dans la parabole des talents, un maître confie des sommes d'argent (talents) à trois serviteurs avant de partir en voyage. Deux serviteurs font fructifier leur argent, mais le troisième l'enterre par peur. À son retour, le maître récompense les premiers et condamne le dernier. Elle enseigne la responsabilité de utiliser les dons que Dieu nous a accordés. 'Car on donnera à celui qui a, et il sera dans l'abondance, mais à celui qui n'a pas on ôtera même ce qu'il a.' (Matthieu 25:29)"
  },

  // --- Miracles de Jésus ---
  {
    keywords: ["miracle", "eau vin", "canan"],
    answer: "Le premier miracle de Jésus a été de changer l'eau en vin lors d'un mariage à Cana, révélant sa gloire. 'Jésus changea l'eau en vin.' (Jean 2:9) Ce miracle montre que Jésus a autorité sur la nature et se soucie des besoins quotidiens."
  },
  
  {
    keywords: ["miracle", "marche sur eau", "tempete apaisee"],
    answer: "Jésus a marché sur les eaux du lac de Galilée pendant une tempête, calmant également la tempête par sa parole. 'C'est moi; n'ayez pas peur!' (Jean 6:20) Ces miracles démontrent son pouvoir sur la nature et sa divinité."
  },
  
  {
    keywords: ["miracle", "pain", "poissons", "5000", "nourrir foule"],
    answer: "Jésus a nourri 5 000 hommes (plus femmes et enfants) avec seulement cinq pains et deux poissons. 'Ils mangèrent tous, et furent rassasiés.' (Marc 6:42) Ce miracle montre la provision de Dieu et préfigure l'Eucharistie."
  },
  
  {
    keywords: ["miracle", "aveugle", "malvoyant", "gueri vue"],
    answer: "Jésus a guéri plusieurs aveugles, dont un né à l'aveugle en lui mettant de la boue sur les yeux et en lui disant de se laver au bassin de Siloé. 'Je suis la lumière du monde.' (Jean 9:5) Ces miracles montrent que Jésus apporte la lumière spirituelle et physique."
  },
  
  {
    keywords: ["miracle", "lazare", "ressuscite mort", "tombeau"],
    answer: "Jésus a ressuscité Lazare qui était mort depuis quatre jours, démontrant son pouvoir sur la mort. 'Lazare, sors!' (Jean 11:43) Ce miracle a provoqué la foi de beaucoup mais aussi la jalousie des autorités religieuses qui ont alors comploté de tuer Jésus."
  },

  // --- Enseignements de Jésus ---
  {
    keywords: ["sermon montagne", "beatitudes", "bienheureux"],
    answer: "Le Sermon sur la montagne (Matthieu 5-7) contient l'essence de l'enseignement de Jésus, incluant les Béatitudes: 'Bienheureux les pauvres en esprit, car le royaume des cieux est à eux! Bienheureux les affligés, car ils seront consolés! Bienheureux les débonnaires, car ils hériteront la terre!' (Matthieu 5:3-5) Jésus y enseigne également le Notre Père et plusieurs principes du royaume."
  },
  
  {
    keywords: ["notre pere", "prieres jesus", "modele priere"],
    answer: "Le Notre Père est la prière que Jésus a enseignée à ses disciples comme modèle: 'Notre Père qui es aux cieux! Que ton nom soit sanctifié; que ton règne vienne; que ta volonté soit faite sur la terre comme au ciel. Donne-nous aujourd'hui notre pain quotidien; pardonne-nous nos offenses, comme nous aussi nous pardonnons à ceux qui nous ont offensés; ne nous induis pas en tentation, mais délivre-nous du mal.' (Matthieu 6:9-13)"
  },
  
  {
    keywords: ["commandement amour", "plus grand commandement"],
    answer: "Jésus a résumé toute la loi en deux commandements: 'Tu aimeras le Seigneur, ton Dieu, de tout ton cœur, de toute ton âme, et de toute ta pensée. C'est le premier et le plus grand commandement. Et voici le second, qui lui est semblable: Tu aimeras ton prochain comme toi-même.' (Matthieu 22:37-39)"
  },
  
  {
    keywords: ["je suis", "declarations jesus"],
    answer: "Dans l'Évangile de Jean, Jésus fait sept déclarations 'Je suis': le pain de vie (6:35), la lumière du monde (8:12), la porte (10:9), le bon berger (10:11), la résurrection et la vie (11:25), le chemin, la vérité et la vie (14:6), et le vrai cep (15:1). Ces déclarations révèlent son identité divine."
  },

  // --- Études thématiques approfondies ---
  {
    keywords: ["noms dieu", "dieudonne", "jehovah", "elohim", "adonai"],
    answer: "La Bible révèle Dieu sous différents noms qui expriment ses attributs:\n- Elohim: Dieu Créateur, tout-puissant\n- Yahvé/Jéhovah: Le Dieu éternel, existant par lui-même\n- Jéhovah Jiré: L'Éternel pourvoira\n- Jéhovah Rapha: L'Éternel qui guérit\n- Jéhovah Nissi: L'Éternel notre bannière\n- Jéhovah Shalom: L'Éternel paix\n- Jéhovah Raah: L'Éternel mon berger\n- Jéhovah Tsidkenu: L'Éternel notre justice\n- Adonaï: Seigneur, Maître\n'Je suis celui qui suis.' (Exode 3:14)"
  },
  
  {
    keywords: ["fruits esprit", "caractere chretien", "saint esprit fruit"],
    answer: "Les fruits de l'Esprit sont les qualités que le Saint-Esprit produit chez les croyants: 'Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance.' (Galates 5:22-23) Ces fruits contrastent avec les œuvres de la chair et sont le résultat d'une vie conduite par l'Esprit."
  },
  
  {
    keywords: ["dons esprit", "spirituels", "capacites"],
    answer: "Les dons spirituels sont des capacités surnaturelles données par le Saint-Esprit pour l'édification de l'Église. Ils incluent: sagesse, connaissance, foi, guérisons, miracles, prophétie, discernement, langues, interprétation des langues (1 Corinthiens 12:8-10), ainsi que des dons de service comme l'enseignement, le gouvernement, la miséricorde (Romains 12:6-8). 'Il y a diversité de dons, mais le même Esprit.' (1 Corinthiens 12:4)"
  },
  
  {
    keywords: ["armure dieu", "combat spirituel", "protection"],
    answer: "L'armure de Dieu décrite dans Éphésiens 6:10-18 comprend:\n- La ceinture de la vérité\n- La cuirasse de la justice\n- Les chaussures de la paix de l'Évangile\n- Le bouclier de la foi\n- Le casque du salut\n- L'épée de l'Esprit (la Parole de Dieu)\n- La prière constante\n'Revêtez-vous de toute l'armure de Dieu, afin de pouvoir tenir ferme contre les ruses du diable.' (Éphésiens 6:11)"
  },
  
  {
    keywords: ["sacrifice", "expiation", "propitiation", "croix"],
    answer: "Le sacrifice de Jésus sur la croix est au cœur du message chrétien. Jésus, le Fils de Dieu sans péché, s'est offert comme sacrifice pour les péchés de l'humanité, satisfaisant la justice de Dieu et permettant la réconciliation entre Dieu et les hommes. 'Il a été blessé pour nos péchés, brisé pour nos iniquités; le châtiment qui nous donne la paix est tombé sur lui.' (Ésaïe 53:5) 'Christ nous a rachetés de la malédiction de la loi.' (Galates 3:13)"
  },

  // --- Prières bibliques ---
  {
    keywords: ["priere david", "psaume 51", "repentance"],
    answer: "Le Psaume 51 est la prière de repentance de David après son péché avec Bethsabée: 'O Dieu! aie pitié de moi dans ta bonté; selon ta grande miséricorde, efface mes transgressions; lave-moi complètement de mon iniquité, et purifie-moi de mon péché.' (Psaume 51:1-2) Cette prière est un modèle de confession sincère et de demande de purification."
  },
  
  {
    keywords: ["priere salomon", "sagesse", "intelligence"],
    answer: "La prière de Salomon à Gabaon demande la sagesse plutôt que la richesse ou la longue vie: 'Donne donc à ton serviteur un cœur intelligent pour juger ton peuple, pour discerner le bien du mal!' (1 Rois 3:9) Dieu a été si satisfait de cette demande qu'il a accordé la sagesse mais aussi la richesse et la longue vie."
  },
  
  {
    keywords: ["priere jesus", "getsmani", "agonie"],
    answer: "La prière de Jésus au jardin de Gethsémani montre son humanité et sa soumission à la volonté de Dieu: 'Mon Père, s'il est possible, que cette coupe s'éloigne de moi! Toutefois, non pas ce que je veux, mais ce que tu veux.' (Matthieu 26:39) Cette prière nous enseigne à être honnêtes avec Dieu tout en nous soumettant à sa volonté."
  },
  
  {
    keywords: ["priere paul", "ephesiens", "connaissance dieu"],
    answer: "L'apôtre Paul priait pour que les croyants connaissent mieux Dieu: 'Je prie que le Dieu de notre Seigneur Jésus-Christ, le Père de gloire, vous donne un esprit de sagesse et de révélation, dans sa connaissance; qu'il éclaire les yeux de votre cœur, pour que vous sachiez quelle est l'espérance qui s'attache à son appel.' (Éphésiens 1:17-18)"
  },

  // --- Promesses de Dieu ---
  {
    keywords: ["promesse", "dieune ment pas", "fidelite"],
    answer: "Dieu est fidèle à ses promesses: 'Dieu n'est pas un homme pour mentir, ni fils d'un homme pour se repentir. Ce qu'il a dit, ne le fera-t-il pas? Ce qu'il a déclaré, ne l'exécutera-t-il pas?' (Nombres 23:19) 'Car toutes les promesses de Dieu en lui sont oui, et en lui amen.' (2 Corinthiens 1:20)"
  },
  
  {
    keywords: ["promesse presence", "dieuest la", "avec moi"],
    answer: "Dieu promet sa présence constante: 'Je suis avec vous tous les jours, jusqu'à la fin du monde.' (Matthieu 28:20) 'Ne te délaisse point, car je ne te délaisserai point.' (Josué 1:5) 'C'est moi qui suis avec toi pour te délivrer.' (Jérémie 1:8)"
  },
  
  {
    keywords: ["promesse provision", "dieufournira", "besoins"],
    answer: "Dieu promet de pourvoir à nos besoins: 'Mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.' (Philippiens 4:19) 'Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.' (Matthieu 6:33)"
  },
  
  {
    keywords: ["promesse protection", "dieugarde", "securite"],
    answer: "Dieu promet sa protection: 'Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel: Mon refuge et ma forteresse, mon Dieu en qui je me confie!' (Psaume 91:1-2) 'Aucune tentation ne vous est survenue qui n'ait été humaine, et Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au-delà de vos forces.' (1 Corinthiens 10:13)"
  },
  
  {
    keywords: ["promesse paix", "paix dieu", "calme"],
    answer: "Dieu promet sa paix: 'Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde la donne. Que votre cœur ne se trouble point, et ne s'alarme point.' (Jean 14:27) 'La paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.' (Philippiens 4:7)"
  },
  
  {
    keywords: ["promesse vie eternelle", "salut", "ciel"],
    answer: "Dieu promet la vie éternelle: 'Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.' (Jean 3:16) 'Je vais vous préparer une place.' (Jean 14:2) 'Et Dieu essuiera toute larme de leurs yeux, et la mort ne sera plus.' (Apocalypse 21:4)"
  },



// const knowledgeBaseExtended = [

  // ===== TOUTES LES ENTRÉES PRÉCÉDENTES RESTENT =====
  // (conservez toutes les entrées du message précédent ici)

  // ================================================================
  // ===== NOUVELLES ADDITIONS MASSIVES =====
  // ================================================================

  // ===== PROPHÈTES DE L'ANCIEN TESTAMENT =====
  {
    keywords: ["esai", "isaie", "prophete esai"],
    answer: "Ésaïe est appelé 'le prophète évangélique' car son livre contient de nombreuses prophéties sur le Messie, écrites 700 ans avant Jésus. Il a prophétisé la naissance virginale (7:14), le ministère du Messie (61:1-2), et la souffrance expiatoire (53:1-12). 'Voici, la vierge sera enceinte, elle enfantera un fils, et on lui donnera le nom d'Emmanuel.' (Ésaïe 7:14)"
  },
  {
    keywords: ["jeremie", "prophete jeremie", "pleurs"],
    answer: "Jérémie est appelé 'le prophète des larmes' car il a pleuré sur le péché de Juda et la destruction de Jérusalem. Il a prophétisé pendant 40 ans, souvent persécuté. Dieu l'a appelé avant sa naissance. 'Avant que je t'eusse formé dans le ventre de ta mère, je te connaissais, et avant que tu fusses sorti de son sein, je t'ai sanctifié.' (Jérémie 1:5)"
  },
  {
    keywords: ["ezechiel", "prophete ezechiel", "vallee ossements"],
    answer: "Ézéchiel était prêtre et prophète pendant l'exil à Babylone. Ses visions incluent le char de Dieu, la vallée des ossements secs (symbolisant la restauration d'Israël), et le temple futur. 'Esprit, viens des quatre vents, souffle sur ces morts, et qu'ils revivent!' (Ézéchiel 37:9)"
  },
  {
    keywords: ["daniel", "prophete daniel", "fosse aux lions"],
    answer: "Daniel a été déporté jeune à Babylone mais est resté fidèle à Dieu. Il a interprété les rêves de Nebucadnetsar, survécu à la fosse aux lions, et reçu des prophéties sur les empires futurs et les temps de la fin. 'Mon Dieu a envoyé son ange et fermé la gueule des lions.' (Daniel 6:22)"
  },
  {
    keywords: ["amos", "prophete amos", "justice sociale"],
    answer: "Amos était berger et cueilleur de sycomores, mais Dieu l'a appelé à prophétiser contre l'injustice sociale en Israël. Il dénonçait l'oppression des pauvres et l'hypocrisie religieuse. 'Que la justice coule comme un fleuve, et la droiture comme un ruisseau qui ne tarit jamais!' (Amos 5:24)"
  },
  {
    keywords: ["os", "hosee", "prophete hosee"],
    answer: "Osée a été appelé par Dieu à épouser une femme infidèle comme image de la relation entre Dieu et Israël infidèle. Son livre illustre l'amour inconditionnel de Dieu pour son peuple malgré son infidélité. 'Je les ai aimés d'un amour gratuit.' (Osée 14:5)"
  },
  {
    keywords: ["jonas", "prophete jonas", "baleine", "ninive"],
    answer: "Jonas a fui la mission que Dieu lui donnait d'aller prêcher à Ninive (ville ennemie). Avalé par un grand poisson pendant trois jours, il s'est repenti et a finalement obéi. Ce livre illustre la miséricorde de Dieu envers tous les peuples. 'La miséricorde de l'Éternel s'étend sur tous ceux qui le craignent.' (Psaume 103:17 - thème similaire)"
  },
  {
    keywords: ["elie", "prophete elie", "mont carmel", "feu du ciel"],
    answer: "Élie est l'un des plus grands prophètes de l'Ancien Testament. Il a défié 450 prophètes de Baal sur le mont Carmel, où le feu de Dieu est tombé du ciel en réponse à sa prière. Il a été enlevé au ciel dans un char de feu. 'Éternel, Dieu d'Abraham, d'Isaac et d'Israël! Que l'on sache aujourd'hui que tu es Dieu en Israël!' (1 Rois 18:36)"
  },
  {
    keywords: ["elisee", "prophete elisee", "double portion"],
    answer: "Élisée était le successeur d'Élie et a demandé une double portion de son esprit. Il a accompli de nombreux miracles: division du Jourdain, guérison des eaux de Jéricho, multiplication de l'huile d'une veuve, résurrection d'un enfant, guérison de Naaman la lèpre. 'Que je reçoive une double portion de ton esprit!' (2 Rois 2:9)"
  },
  {
    keywords: ["michee", "miche", "bethlehem prophete"],
    answer: "Michée a prophétisé pendant les règnes de Jotham, Achaz et Ézéchias. Il a annoncé que le Messie naîtrait à Bethléem. 'Et toi, Bethléem Éphrata, petit entre les milliers de Juda, de toi sortira pour moi celui qui dominera sur Israël.' (Michée 5:2)"
  },
  {
    keywords: ["habakuk", "prophete habakuk", "pourquoi dieu"],
    answer: "Habakuk a posé des questions honnêtes à Dieu sur la souffrance et l'injustice. Sa conclusion est un modèle de foi: 'Bien que le figuier ne bourgeonne pas, que la vigne ne donne aucun fruit, que l'olivier ne produise rien, que les champs ne donnent aucune nourriture... je me réjouirai dans l'Éternel.' (Habakuk 3:17-18)"
  },
  {
    keywords: ["naoum", "nahum", "ninive destruction"],
    answer: "Nahum a prophétisé la chute de Ninive, environ 150 ans après Jonas. Tandis que Jonas appelait Ninive au repentir, Nahum annonçait son jugement pour sa cruauté. 'L'Éternel est un Dieu jaloux et vengeur, l'Éternel se venge, il est plein de fureur.' (Nahum 1:2)"
  },
  {
    keywords: ["sophonie", "jour de leternel"],
    answer: "Sophonie a prophétisé pendant le règne de Josias. Il a annoncé le 'jour de l'Éternel' comme un jour de jugement mais aussi d'espoir pour ceux qui cherchent Dieu. 'Cherchez l'Éternel, vous tous humbles du pays, qui pratiquez ses ordonnances! Cherchez la justice, cherchez l'humilité!' (Sophonie 2:3)"
  },
  {
    keywords: ["agg", "prophete agge", "temple reconstruction"],
    answer: "Aggée a encouragé le peuple à reconstruire le temple après le retour d'exil, alors qu'ils étaient distraits par leurs propres maisons. 'Considérez attentivement vos voies! Montez sur la montagne, apportez du bois, et bâtissez la maison!' (Aggée 1:7-8)"
  },
  {
    keywords: ["zacharie", "prophete zacharie", "vision"],
    answer: "Zacharie a eu de nombreuses visions symboliques et a prophétisé sur la venue du Messie comme Roi humble montant sur un ânon. 'Sois transportée d'allégresse, fille de Sion! Pousse des cris de joie, fille de Jérusalem! Voici, ton roi vient à toi; il est juste et victorieux.' (Zacharie 9:9)"
  },
  {
    keywords: ["malachie", "dernier prophete", "dime malachie"],
    answer: "Malachie est le dernier prophète de l'Ancien Testament, écrivant environ 400 ans avant Jésus. Il a dénoncé le culte sans cœur, les mariages mixtes et le vol de la dîme. 'Voici, je vous enverrai Élie, le prophète, avant que le jour de l'Éternel arrive.' (Malachie 4:5)"
  },

  // ===== LES 12 TRIBUS D'ISRAËL =====
  {
    keywords: ["tribus israel", "douze tribus", "12 tribus"],
    answer: "Les douze tribus d'Israël descendent des douze fils de Jacob: Ruben, Siméon, Lévi, Juda, Dan, Nephtali, Gad, Aser, Issacar, Zabulon, Joseph (Éphraïm et Manassé), Benjamin. Lévi n'avait pas de territoire mais servait au temple; Joseph fut remplacé par ses deux fils. Juda est la tribu royale d'où vient le Messie."
  },
  {
    keywords: ["tribu juda", "lion juda", "ligne davidique"],
    answer: "Juda était la quatrième tribu, celle du roi David et de Jésus-Christ. Jacob a prophétisé: 'Juda est un jeune lion. Tu te courberas, Juda, comme une lionne.' (Genèse 49:9) Le Messie est appelé 'le lion de la tribu de Juda' (Apocalypse 5:5)."
  },
  {
    keywords: ["tribu levi", "levites", "sacerdoce"],
    answer: "La tribu de Lévi a été choisie pour le service du tabernacle et du temple à la place des premiers-nés. Les descendants d'Aaron (de la tribu de Lévi) étaient les prêtres (cohanim). Ils n'avaient pas de territoire mais dépendaient des dîmes. 'Je suis ta part et ton héritage au milieu des enfants d'Israël.' (Nombres 18:20)"
  },
  {
    keywords: ["tribu benjamin", "benjaminites", "saoul"],
    answer: "Benjamin était la plus petite tribu et la plus jeune de Jacob. Le premier roi d'Israël, Saül, venait de cette tribu. L'apôtre Paul était aussi benjamite. 'Benjamin est un loup qui déchire.' (Genèse 49:27)"
  },

  // ===== FÊTES BIBLIQUES =====
  {
    keywords: ["pque juive", "passover", "agneau pascal"],
    answer: "La Pâque juive (Pessah) commémore la délivrance d'Égypte quand l'ange de la mort a 'passé au-dessus' des maisons marquées par le sang de l'agneau. C'est une figure de Jésus, 'l'Agneau de Dieu qui ôte le péché du monde.' (Jean 1:29) 'Christ, notre Pâque, a été immolé.' (1 Corinthiens 5:7)"
  },
  {
    keywords: ["pentecote juive", "shavouot", "semaines"],
    answer: "La Pentecôte juive (Shavouot) célèbre le don de la loi au Sinaï, 50 jours après la Pâque. C'est lors de cette fête que le Saint-Esprit est descendu sur les disciples: 'Quand le jour de la Pentecôte arriva, ils étaient tous ensemble dans le même lieu.' (Actes 2:1)"
  },
  {
    keywords: ["fete tabernacles", "souccot", "cabanes"],
    answer: "La fête des Tabernacles (Souccot) commémore les 40 ans dans le désert quand les Israélites vivaient dans des cabanes. C'est une fête de joie et de remerciement pour la récolte. Elle préfigure le rassemblement final des nations et Dieu habitant avec les hommes. 'Vous demeurerez dans des cabanes pendant sept jours.' (Lévitique 23:42)"
  },
  {
    keywords: ["fete trompettes", "rosh hashana", "yom teruah"],
    answer: "La fête des Trompettes (Yom Terouah/Rosh Hashana) est le début de l'année civile juive. Elle est marquée par le son du shofar (corne de bélier). Certains la relient à la rassemblée des croyants à la fin des temps. 'Au septième mois, le premier jour du mois, vous aurez un repos solennel, commémoré au son des trompettes.' (Lévitique 23:24)"
  },
  {
    keywords: ["jour expiation", "yom kippour", "grand pardon"],
    answer: "Le jour des Expiations (Yom Kippour) était le jour le plus saint de l'année, où le souverain sacrificateur entrait dans le Saint des Saints pour offrir le sang pour les péchés du peuple. C'est une figure de l'œuvre expiatoire de Jésus. 'Car c'est dans ce sang qu'il y a pardon.' (Lévitique 17:11)"
  },
  {
    keywords: ["hanukka", "lumieres", "dedicace"],
    answer: "Hanukka (fête des Lumières) commémore la redédication du temple par les Maccabées en 165 av. J.-C. après sa profanation par les Grecs. Jésus a été au temple pendant cette fête: 'C'était la fête de la Dédicace à Jérusalem. C'était l'hiver.' (Jean 10:22)"
  },
  {
    keywords: ["pourim", "esther", "lots"],
    answer: "Pourim commémore la délivrance des Juifs de Perse racontée dans le livre d'Esther, quand Esther a intercédé auprès du roi pour sauver son peuple du complot d'Haman. 'Ces jours ont été appelés Pourim, du mot Pour (le sort).' (Esther 9:26)"
  },

  // ===== FEMMES DE LA BIBLE =====
  {
    keywords: ["sarah", "sara", "femme abraham"],
    answer: "Sarah, femme d'Abraham, a donné naissance à Isaac à 90 ans, accomplissant la promesse de Dieu. Malgré ses doutes et ses rires, Dieu a été fidèle. 'Est-il rien de trop difficile pour l'Éternel?' (Genèse 18:14)"
  },
  {
    keywords: ["rebecca", "rebekka", "femme isaac"],
    answer: "Rebecca est devenue la femme d'Isaac après qu'un serviteur d'Abraham a été guidé par Dieu pour la trouver à la source. Elle a montré de la bienveillance en offrant de l'eau au serviteur et à ses chameaux. 'L'Éternel a conduit mon chemin.' (Genèse 24:27)"
  },
  {
    keywords: ["rachel", "femme jacob", "bien aimee"],
    answer: "Rachel était la femme bien-aimée de Jacob, pour qui il a travaillé 14 ans. Elle est morte en donnant naissance à Benjamin près de Bethléem. 'Jacob aimait Rachel plus que Léa.' (Genèse 29:30)"
  },
  {
    keywords: ["mariam", "myriam", "sœur moise"],
    answer: "Mariam, sœur de Moïse et d'Aaron, a surveillé le panier de Moïse sur le Nil. Prophétesse, elle a conduit les femmes dans un chant de louange après la traversée de la mer Rouge. 'Chantez à l'Éternel, car il a fait des prodiges!' (Exode 15:21)"
  },
  {
    keywords: ["debora", "debbora", "juge femme"],
    answer: "Débora est la seule femme juge d'Israël. Prophétesse, elle a encouragé Barak à combattre Sisera, et a chanté un cantique de victoire. 'Je susciterai du milieu de toi un libérateur, Débora, femme prophétesse.' (Juges 4:4)"
  },
  {
    keywords: ["ruth", "naomi", "boaz"],
    answer: "Ruth était une Moabite qui a choisi de suivre la mère de son défunt mari, Naomi, et son Dieu. Elle a trouvé la grâce auprès de Boaz et est devenue arrière-grand-mère du roi David, et ancêtre de Jésus. 'Ton peuple sera mon peuple, et ton Dieu sera mon Dieu.' (Ruth 1:16)"
  },
  {
    keywords: ["hannah", "anne", "samuel mere"],
    answer: "Hannah était stérile mais a prié avec ferveur à Silo, promettant de consacrer son fils à Dieu. Dieu a exaucé sa prière et elle a donné naissance au prophète Samuel. 'L'Éternel a exaucé ta prière.' (1 Samuel 1:17)"
  },
  {
    keywords: ["abigail", "femme nabal", "sagesse"],
    answer: "Abigail est un exemple de sagesse et d'humilité. Quand son mari Nabal a insulté David, elle est intervenue avec diplomatie, empêchant un massacre. Après la mort de Nabal, David l'a épousée. 'Maître, que l'iniquité de Nabal reste sur lui seul!' (1 Samuel 25:25)"
  },
  {
    keywords: ["esther", "reine perse", "courage"],
    answer: "Esther est devenue reine de Perse et a risqué sa vie en se présentant devant le roi sans être convoquée pour sauver son peuple de l'extermination. 'Si je péris, je péris.' (Esther 4:16) Son courage est célébré lors de la fête de Pourim."
  },
  {
    keywords: ["marie madeleine", "madeleine", "magdala"],
    answer: "Marie de Magdala a été délivrée de sept démons par Jésus. Elle est devenue une disciple fidèle, présente à la croix et la première à voir le Christ ressuscité. 'Jésus, étant ressuscité le matin du premier jour de la semaine, apparut d'abord à Marie de Magdala.' (Marc 16:9)"
  },
  {
    keywords: ["marthe", "marie soeur lazare", "bethanie"],
    answer: "Marthe et Marie, sœurs de Lazare, représentaient deux attitudes: Marthe servait activement, Marie écoutait Jésus. Jésus a dit que Marie avait choisi la bonne part, mais n'a pas condamné Marthe. 'Marthe, Marthe, tu te tourmentes et tu t'agites pour beaucoup de choses. Une seule chose est nécessaire.' (Luc 10:41-42)"
  },
  {
    keywords: ["lydie", "philippi", "vendeuse pourpre"],
    answer: "Lydie était une marchande de pourpre à Philippes, convertie par la prédication de Paul. Elle est la première personne convertie en Europe et a offert son hospitalité à Paul. 'Le Seigneur lui ouvrit le cœur pour être attentive à ce que disait Paul.' (Actes 16:14)"
  },
  {
    keywords: ["phoebe", "phoeb", "diaconesse"],
    answer: "Phoébée est mentionnée par Paul comme diacre de l'Église de Cenchrées. Paul la recommande aux Romains et lui exprime sa gratitude. 'Je vous recommande Phoébée, notre sœur, qui est diaconesse de l'Église de Cenchrées.' (Romains 16:1)"
  },
  {
    keywords: ["priscille", "aquila", "couple"],
    answer: "Priscille et Aquila étaient un couple de tentmakers qui ont travaillé avec Paul et hébergé des églises dans leur maison. Priscille est souvent mentionnée avant son mari, suggérant un rôle important. 'Saluez Priscille et Aquila, mes coopérateurs en Jésus-Christ.' (Romains 16:3)"
  },
  {
    keywords: ["jezebel", "jzabel", "mechante"],
    answer: "Jézabel, femme du roi Achab, est devenue le symbole de la méchanceté et de l'idolâtrie. Elle a persécuté les prophètes de l'Éternel et introduit le culte de Baal en Israël. 'Il n'y a eu personne comme Jézabel pour vendre son âme à faire ce qui est mal.' (2 Rois 9:22)"
  },

  // ===== MIRACLES DE L'ANCIEN TESTAMENT =====
  {
    keywords: ["miracle", "mer rouge", "ouverture mer"],
    answer: "L'ouverture de la mer Rouge est l'un des plus grands miracles de l'Ancien Testament. Dieu a divisé les eaux pour qu'Israël passe à sec, puis a fait se refermer la mer sur l'armée égyptienne. 'Les enfants d'Israël entrèrent au milieu de la mer à sec.' (Exode 14:22)"
  },
  {
    keywords: ["miracle", "manne", "nourriture desert"],
    answer: "Dieu a pourvu à la nourriture d'Israël dans le désert en envoyant la manne chaque matin pendant 40 ans. C'est une figure de Jésus, le pain de vie. 'Voici, je ferai pleuvoir pour vous du pain du ciel.' (Exode 16:4)"
  },
  {
    keywords: ["miracle", "rocher frappe", "eau roche"],
    answer: "Dieu a fait couler de l'eau d'un rocher à deux reprises pour désaltérer Israël dans le désert. Paul dit que ce rocher était Christ. 'Ce rocher était Christ.' (1 Corinthiens 10:4)"
  },
  {
    keywords: ["miracle", "mur jericho", "effondrement"],
    answer: "Les murs de Jéricho se sont effondrés après que les Israélites ont marché autour de la ville pendant sept jours, en obéissance à Dieu. 'Les murailles s'effondrèrent.' (Josué 6:20)"
  },
  {
    keywords: ["miracle", "soleil arret", "joshua", "josue"],
    answer: "Josué a prié et Dieu a arrêté le soleil et la lune pendant près d'un jour pour permettre la victoire d'Israël sur les Amoréens. 'Soleil, arrête-toi sur Gabaon, et toi, lune, sur la vallée d'Ajalon!' (Josué 10:12)"
  },
  {
    keywords: ["miracle", "feu elie", "carmel sacrifice"],
    answer: "Sur le mont Carmel, Élie a prié et le feu de l'Éternel est tombé du ciel, consumant le sacrifice, le bois, les pierres et même l'eau du fossé. 'Le feu de l'Éternel tomba, et il consuma l'holocauste.' (1 Rois 18:38)"
  },
  {
    keywords: ["miracle", "huile veuve", "multiplication huile"],
    answer: "Élisée a multiplié l'huile d'une veuve endettée: avec peu d'huile et des vaisseaux empruntés, Dieu a rempli tous les vaisseaux, permettant de payer les dettes. 'Vaisseau après vaisseau fut rempli.' (2 Rois 4:6)"
  },
  {
    keywords: ["miracle", "ressuscite", "ancien testament", "elisee"],
    answer: "Élisée a ressuscité le fils de la Shunammite, et après sa mort, un homme mort a touché ses os et a été ressuscité. Ces miracles préfigurent le pouvoir de Jésus sur la mort. 'Il s'étendit sur l'enfant... et l'enfant éternua sept fois.' (2 Rois 4:34-35)"
  },
  {
    keywords: ["miracle", "naaman", "lepre", "guerison"],
    answer: "Naaman, général syrien lépreux, a été guéri en se plongeant sept fois dans le Jourdain selon la parole d'Élisée, malgré son orgueil initial. 'Va, lave-toi sept fois dans le Jourdain, et ta chair redeviendra saine.' (2 Rois 5:10)"
  },
  {
    keywords: ["miracle", "daniel", "four ardent", "chaleur"],
    answer: "Schadrac, Méschac et Abed-Nego ont été jetés dans un four ardent pour avoir refusé d'adorer une statue, mais sont sortis sans brûler. Un quatrième homme était avec eux dans le feu. 'Je vois quatre hommes sans liens, qui marchent au milieu du feu, et ils n'ont point de mal.' (Daniel 3:25)"
  },

  // ===== PROPHÉTIES MESSIANIQUES =====
  {
    keywords: ["prophetic messie", "ancien testament jesus", "accomplissement"],
    answer: "Jésus a accompli plus de 300 prophéties de l'Ancien Testament, dont: né à Bethléem (Michée 5:2), né d'une vierge (Ésaïe 7:14), entrée triomphale sur un ânon (Zacharie 9:9), trahi par un ami (Psaume 41:10), vendu pour 30 pièces d'argent (Zacharie 11:12), crucifié (Psaume 22:16-17), ressuscité (Psaume 16:10). 'Toutes les choses qui ont été écrites à mon sujet dans la loi de Moïse, les prophètes et les psaumes doivent être accomplies.' (Luc 24:44)"
  },
  {
    keywords: ["psaume 22", "crucifixion prophtie", "cri abandon"],
    answer: "Le Psaume 22, écrit par David 1000 ans avant Jésus, décrit la crucifixion avec une précision remarquable: 'ils ont percé mes mains et mes pieds' (v.16), 'ils se partagent mes vêtements' (v.18), 'tous ceux qui me voient se moquent de moi' (v.7). Jésus a cité le premier vers: 'Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné?' (Matthieu 27:46)"
  },
  {
    keywords: ["esai 53", "serviteur souffrant", "expiation prophtie"],
    answer: "Ésaïe 53 décrit le Messie souffrant avec une précision chirurgicale: 'Méprisé et abandonné des hommes, homme de douleur et habitué à la souffrance... il a été transpercé à cause de nos transgressions, brisé à cause de nos iniquités; le châtiment qui nous donne la paix est tombé sur lui, et c'est par ses meurtrissures que nous sommes guéris.' (Ésaïe 53:3-5)"
  },

  // ===== LES 7 ÉGLISES DE L'APOCALYPSE =====
  {
    keywords: ["sept eglises", "7 eglises", "apocalypse eglises"],
    answer: "Les sept églises d'Apocalypse 2-3 sont: Éphèse (perdue son premier amour), Smyrne (persécutée mais fidèle), Pergame (compromis avec le monde), Thyatire (tolérait la fausse doctrine), Sardes (nom de vivant mais morte), Philadelphie (fidèle et petite), Laodicée (tiède et riche spirituellement pauvre). 'Que celui qui a des oreilles entende ce que l'Esprit dit aux Églises!' (Apocalypse 3:22)"
  },
  {
    keywords: ["eglise ephese", "premier amour", "apostasie"],
    answer: "L'église d'Éphèse était travailleuse et persévérante mais avait perdu son premier amour. Dieu l'appelle à se repentir. 'Je connais tes œuvres, ton travail, et ta persévérance... Mais ce que j'ai contre toi, c'est que tu as abandonné ton premier amour.' (Apocalypse 2:2-4)"
  },
  {
    keywords: ["eglise laodicee", "tie", "vomi"],
    answer: "L'église de Laodicée était riche matériellement mais pauvre spirituellement. Sa tiédeur dégoûtait Dieu. 'Parce que tu es tiède, et que tu n'es ni froid ni bouillant, je te vomirai de ma bouche.' (Apocalypse 3:16) 'Tu dis: Je suis riche... et tu ne connais pas que tu es malheureux, misérable, pauvre, aveugle et nu.' (Apocalypse 3:17)"
  },

  // ===== LES JUGES D'ISRAËL =====
  {
    keywords: ["juges israel", "periode juges", "othniel", "ehud"],
    answer: "La période des juges a duré environ 350 ans entre Josué et Samuel. Les juges étaient des libérateurs que Dieu soulevait quand Israël se repentait. Les principaux: Othniel, Éhud, Débora/Barak, Gédéon, Thola, Jaïr, Jephté, Ibzan, Élon, Abdon, Samson. 'En ces jours-là, il n'y avait pas de roi en Israël; chacun faisait ce qui lui semblait bon.' (Juges 21:25)"
  },
  {
    keywords: ["guedon", "gideon", "300 guerriers"],
    answer: "Gédéon a été appelé par Dieu alors qu'il se cachait pour battre le blé. Avec seulement 300 hommes armés de trompettes et de torches, il a vaincu l'armée madianite. Dieu a réduit son armée de 32 000 à 300 pour montrer que la victoire vient de Lui. 'L'Éternel vous a livré le camp de Madian.' (Juges 7:15)"
  },
  {
    keywords: ["samson", "force", "dalila", "nazire"],
    answer: "Samson était naziréen dès sa naissance, doté d'une force surnaturelle. Après avoir été trahi par Dalila et avoir perdu ses cheveux (symbole de sa consécration), il a été capturé mais a retrouvé sa force pour une dernière victoire. 'Que je meure avec les Philistins!' (Juges 16:30)"
  },
  {
    keywords: ["jephte", "voeu", "fille"],
    answer: "Jephté, fils d'une prostituée, est devenu juge après avoir été rejeté. Il a fait un vœu imprudent d'offrir en sacrifice la première personne qui sortirait de sa maison à son retour, ce qui s'est avéré être sa fille. Cette histoire montre les dangers des vœux inconsidérés. 'J'ai fait un vœu à l'Éternel, et je ne peux pas revenir sur ma parole.' (Juges 11:35)"
  },

  // ===== LES ROIS D'ISRAËL ET DE JUDA =====
  {
    keywords: ["rois israel", "rois juda", "liste rois"],
    answer: "Après Saül, David et Salomon, le royaume s'est divisé: Israël au nord (10 tribus, 19 rois, tous mauvais) et Juda au sud (2 tribus, 20 rois, quelques bons comme Asa, Josaphat, Ézéchias, Josias). Les rois d'Israël incluent Jéroboam, Ahab, Jéhu. 'Le cœur de ce peuple est incliné à s'éloigner de moi.' (1 Rois 14:9)"
  },
  {
    keywords: ["saoul", "saul", "premier roi"],
    answer: "Saül a été le premier roi d'Israël, choisi pour sa stature impressionnante mais il a désobéi à Dieu en préservant le butin d'Amalek et en offrant lui-même des sacrifices. Dieu a alors rejeté son règne. 'L'obéissance vaut mieux que les sacrifices.' (1 Samuel 15:22)"
  },
  {
    keywords: ["salomon", "sagesse", "temple", "richesse"],
    answer: "Salomon, fils de David, a été le roi le plus sage et le plus riche d'Israël. Il a construit le temple et écrit des Proverbes, l'Ecclésiaste et le Cantique des Cantiques. Mais ses femmes étrangères l'ont détourné de Dieu à la fin de sa vie. 'La sagesse de Salomon surpassait la sagesse de tous les Orientaux.' (1 Rois 4:30)"
  },
  {
    keywords: ["ezchias", "hezekiah", "rois fideles"],
    answer: "Ézéchias fut l'un des meilleurs rois de Juda. Il a restauré le temple, détruit les idoles, et prié quand l'armée assyrienne a menacé Jérusalem. Dieu a miraculeusement détruit 185 000 soldats assyriens en une nuit. 'L'ange de l'Éternel frappa le camp des Assyriens.' (2 Rois 19:35)"
  },
  {
    keywords: ["josias", "rolle loi", "reforme"],
    answer: "Josias est devenu roi à 8 ans et a entrepris une grande réforme religieuse après la découverte du livre de la loi dans le temple. Il a détruit les idoles et célébré la Pâque comme jamais depuis Samuel. 'Son cœur fut touché, et il s'humilia devant l'Éternel.' (2 Chroniques 34:27)"
  },
  {
    keywords: ["achab", "jezebel", "baal", "peche roi"],
    answer: "Achab fut l'un des pires rois d'Israël, influencé par sa femme Jézabel. Il a introduit le culte de Baal et persécuté les prophètes de l'Éternel. 'Achab fit ce qui est mal aux yeux de l'Éternel, plus que tous ceux qui avaient été avant lui.' (1 Rois 16:30)"
  },

  // ===== STRUCTURE DU TABERNACLE =====
  {
    keywords: ["tabernacle", "tente rencontre", "sanctuaire desert"],
    answer: "Le tabernacle était le lieu de la présence de Dieu pendant le désert. Il comprenait: le parvis (autel des holocaustes et cuve d'airain), le Lieu Saint (table des pains de proposition, chandelier d'or, autel des parfums), et le Saint des Saints (arche de l'alliance). 'Ils feront un sanctuaire pour moi, et j'habiterai au milieu d'eux.' (Exode 25:8)"
  },
  {
    keywords: ["arche alliance", "coffre", "propitiatoire"],
    answer: "L'arche de l'alliance contenait les tables de la loi, un pot de manne et la verge d'Aaron fleurie. Le propitiatoire (couverture en or) sur l'arche était le lieu où le sang de l'expiation était aspergé le jour des Expiations. C'est une figure de Christ. 'Là je me rencontrerai avec toi.' (Exode 25:22)"
  },
  {
    keywords: ["chandelier or", "menorah", "lumiere"],
    answer: "Le chandelier d'or à 7 branches était le seul éclairage du Lieu Saint, symbolisant la lumière de Dieu et la présence du Saint-Esprit. Les prêtres devaient le maintenir allumé en permanence. 'Tu feras un chandelier d'or pur.' (Exode 25:31) Jésus a dit: 'Je suis la lumière du monde.' (Jean 8:12)"
  },
  {
    keywords: ["voile dechire", "voile temple", "acces dieu"],
    answer: "Le voile du temple séparait le Lieu Saint du Saint des Saints. Au moment de la mort de Jésus, ce voile s'est déchiré de haut en bas, symbolisant que l'accès à Dieu est maintenant ouvert à tous par le sacrifice du Christ. 'Le voile du temple se déchira en deux, depuis le haut jusqu'en bas.' (Marc 15:38)"
  },

  // ===== LES OFFICES DE CHRIST =====
  {
    keywords: ["prophete", "pretre", "roi", "offices christ"],
    answer: "Christ exerce trois offices:\n\n1. PROPHÈTE: Il révèle la volonté de Dieu. 'Moïse a dit: Le Seigneur votre Dieu suscitera de vos frères un prophète comme moi.' (Actes 3:22)\n\n2. PRÊTRE: Il offre le sacrifice et intercède. 'Nous avons un grand souverain sacrificateur qui a traversé les cieux, Jésus, le Fils de Dieu.' (Hébreux 4:14)\n\n3. ROI: Il règne sur l'univers et sur nos cœurs. 'Il est le Seigneur des seigneurs et le Roi des rois.' (Apocalypse 17:14)"
  },

  // ===== ALLIANCES BIBLIQUES =====
  {
    keywords: ["alliance", "alliances dieu", "promesse alliance"],
    answer: "Les principales alliances bibliques sont:\n\n1. Edenique (Genèse 1-2): avec Adam, promesse de vie sous condition\n2. Adamique (Genèse 3:15): promesse d'un Rédempteur\n3. Noélique (Genèse 9): promesse de ne plus détruire par le déluge\n4. Abrahamique (Genèse 12,15,17): descendance, terre, bénédiction des nations\n5. Mosaïque (Exode 19-24): loi, conditionnelle\n6. Davidique (2 Samuel 7): dynastie éternelle\n7. Nouvelle (Jérémie 31, Luc 22): grâce et transformation du cœur\n'Je ferai une alliance nouvelle.' (Jérémie 31:31)"
  },
  {
    keywords: ["alliance abraham", "etoiles", "promesse descendant"],
    answer: "L'alliance avec Abraham comprenait trois promesses: une descendance nombreuse comme les étoiles, la terre de Canaan, et la bénédiction de toutes les nations par sa descendance. Elle a été scellée par un sacrifice et confirmée par le serment de Dieu. 'Regarde vers le ciel, et compte les étoiles, si tu peux les compter... telle sera ta postérité.' (Genèse 15:5)"
  },
  {
    keywords: ["nouvelle alliance", "grace", "coeur nouveau"],
    answer: "La nouvelle alliance, prophétisée par Jérémie et établie par Jésus, est supérieure à l'ancienne car elle est fondée sur la grâce, non sur les œuvres, et implique une transformation intérieure par le Saint-Esprit. 'Je mettrai ma loi au-dedans d'eux, je l'écrirai dans leur cœur.' (Jérémie 31:33) 'Cette coupe est la nouvelle alliance en mon sang.' (Luc 22:20)"
  },

  // ===== LES HÉROS DE LA FOI (Hébreux 11) =====
  {
    keywords: ["heros foi", "hebreux 11", "nuage temoins"],
    answer: "Hébreux 11 présente la 'galerie des héros de la foi': Abel, Hénoc, Noé, Abraham, Sara, Isaac, Jacob, Joseph, Moïse, Rahab, Gédéon, Barak, Samson, Jephté, David, Samuel, et les prophètes. 'Nous donc aussi, puisque nous sommes environnés d'une si grande nuée de témoins, rejetons tout fardeau et le péché qui nous enveloppe si facilement.' (Hébreux 12:1)"
  },
  {
    keywords: ["abel", "caen", "premier meurtre", "sacrifice"],
    answer: "Abel, fils d'Adam, a offert un sacrifice acceptable à Dieu par la foi, ce qui a provoqué la jalousie de son frère Caïn qui l'a tué. 'Par la foi, Abel offrit à Dieu un sacrifice plus excellent que celui de Caïn.' (Hébreux 11:4)"
  },
  {
    keywords: ["henoc", "enoch", "enlev dieu", "marche dieu"],
    answer: "Hénoc a marché avec Dieu et a été enlevé au ciel sans mourir. Il a prophétisé la venue du Seigneur. 'Hénoc marcha avec Dieu; puis il ne fut plus, parce que Dieu le prit.' (Genèse 5:24)"
  },
  {
    keywords: ["noe", "noah", "arche", "juste"],
    answer: "Noé a trouvé grâce aux yeux de Dieu dans une génération corrompue. Il a construit l'arche pendant environ 100 ans, sauvant sa famille et les animaux. 'Noé était un homme juste et intègre dans son temps; Noé marchait avec Dieu.' (Genèse 6:9)"
  },
  {
    keywords: ["rahab", "prostituee", "foi", "jericho"],
    answer: "Rahab, prostituée de Jéricho, a protégé les espions israélites par la foi. Elle et sa famille ont été épargnées lors de la chute de Jéricho. Elle est devenue ancêtre de David et de Jésus. 'Par la foi, Rahab la prostituée ne périt pas avec les rebelles.' (Hébreux 11:31)"
  },

  // ===== LES 10 PLAGES D'ÉGYPTE =====
  {
    keywords: ["dix plaies", "10 plaies", "egypte plaies"],
    answer: "Les dix plaies d'Égypte étaient des jugements de Dieu sur les faux dieux égyptiens:\n1. Eaux changées en sang\n2. Grenouilles\n3. Poussière changée en moustiques\n4. Mouches venimeuses\n5. Mort du bétail\n6. Ulcères\n7. Grêle\n8. Sauterelles\n9. Ténèbres pendant 3 jours\n10. Mort des premiers-nés\n'Je ferai distinction entre mon peuple et ton peuple.' (Exode 8:22)"
  },

  // ===== LES ÉPÎTRES DE PAUL EN DÉTAIL =====
  {
    keywords: ["galates", "epitre galates", "liberte"],
    answer: "L'épître aux Galates défend la justification par la foi seule contre ceux qui voulaient imposer la circoncision. Paul affirme notre liberté en Christ. 'C'est pour la liberté que Christ nous a affranchis.' (Galates 5:1) 'Si c'est par la grâce, ce n'est plus par les œuvres; autrement la grâce n'est plus une grâce.' (Galates 2:21)"
  },
  {
    keywords: ["ephesiens", "epitre ephesiens", "eglise corps christ"],
    answer: "L'épître aux Éphésiens présente l'Église comme le corps du Christ et exhorte à l'unité, la sainteté et les relations familiales chrétiennes. 'Il a donné les uns comme apôtres, les autres comme prophètes, les autres comme évangélistes, les autres comme pasteurs et docteurs, pour le perfectionnement des saints.' (Éphésiens 4:11-12)"
  },
  {
    keywords: ["philippiens", "epitre philippiens", "joie"],
    answer: "L'épître aux Philippiens, écrite en prison, est la lettre de la joie. Paul y enseigne l'humilité (Christ s'est dépouillé lui-même), la paix de Dieu, et le contentement en toute circonstance. 'Réjouissez-vous toujours dans le Seigneur; je le répète, réjouissez-vous.' (Philippiens 4:4) 'Je peux tout par celui qui me fortifie.' (Philippiens 4:13)"
  },
  {
    keywords: ["colossiens", "epitre colossiens", "preeminence christ"],
    answer: "L'épître aux Colossiens affirme la prééminence absolue de Christ sur toute la création et met en garde contre les fausses philosophies. 'Il est l'image du Dieu invisible, le premier-né de toute la création. Car en lui ont été créées toutes les choses.' (Colossiens 1:15-16)"
  },
  {
    keywords: ["thessaloniciens", "epitre thessaloniciens", "retour christ"],
    answer: "Les deux épîtres aux Thessaloniciens abordent la vie chrétienne, le retour du Christ et la résurrection. La première lettre donne des détails sur l'enlèvement de l'Église. 'Le Seigneur lui-même descendra du ciel... et les morts en Christ ressusciteront premièrement. Ensuite, nous les vivants, qui seront restés, nous serons tous ensemble enlevés avec eux dans les nuées.' (1 Thessaloniciens 4:16-17)"
  },
  {
    keywords: ["timothe", "epitre timothe", "pasteur", "ministere"],
    answer: "Les épîtres à Timothée sont des instructions pastorales de Paul à son jeune disciple. Elles couvrent le leadership de l'Église, la doctrine saine, et l'endurance dans le ministère. 'Combats le bon combat de la foi.' (1 Timothée 6:12) 'Proclame la parole, insiste en toute occasion, favorable ou non.' (2 Timothée 4:2)"
  },
  {
    keywords: ["tite", "epitre tite", "eglise crete"],
    answer: "L'épître à Tite donne des instructions pour l'organisation de l'Église en Crète et met l'accent sur les bonnes œuvres comme fruit de la grâce. 'Il nous a sauvés, non à cause des œuvres de justice que nous aurions faites, mais selon sa miséricorde.' (Tite 3:5)"
  },
  {
    keywords: ["philomon", "epitre philmon", "onesime", "esclave"],
    answer: "L'épître à Philémon est la plus courte de Paul. Il intercède pour Onesime, un esclave fugitif converti, demandant à Philémon de le recevoir comme un frère. C'est une illustration de la grâce de Dieu qui nous réconcilie. 'Reçois-le comme moi-même.' (Philémon 1:17)"
  },
  {
    keywords: ["hebreux", "epitre hebreux", "superiorite christ"],
    answer: "L'épître aux Hébreux démontre la supériorité de Christ sur les anges, Moïse, Josué, et le sacerdoce lévitique. Il présente Christ comme le grand souverain sacrificateur et médiateur de la nouvelle alliance. 'Jésus a été fait médiateur d'une alliance plus excellente.' (Hébreux 8:6)"
  },
  {
    keywords: ["jacques", "epitre jacques", "foi oeuvres", "pratique"],
    answer: "L'épître de Jacques met l'accent sur la foi vivante qui se manifeste par les œuvres, la maîtrise de la langue, la sagesse d'en haut, et la prière de la foi. 'La foi, si elle n'a pas les œuvres, est morte en elle-même.' (Jacques 2:17) 'La prière du juste a une grande efficacité.' (Jacques 5:16)"
  },
  {
    keywords: ["pierre epitre", "1 pierre", "2 pierre", "souffrance esperance"],
    answer: "Les épîtres de Pierre encouragent les croyants face à la persécution et appellent à la sainteté. La première lettre traite de la souffrance pour Christ; la seconde met en garde contre les faux enseignants et rappelle la promesse du retour de Christ. 'Béni soit Dieu, le Père de notre Seigneur Jésus-Christ, qui, selon sa grande miséricorde, nous a régénérés, pour une espérance vivante, par la résurrection de Jésus-Christ d'entre les morts!' (1 Pierre 1:3)"
  },
  {
    keywords: ["jean epitre", "1 jean", "2 jean", "3 jean", "amour verite"],
    answer: "Les épîtres de Jean mettent l'accent sur l'amour, la vérité et la communion avec Dieu. La première lettre donne des critères d'assurance du salut. 'Nous connaissons que nous avons passé de la mort à la vie, parce que nous aimons les frères.' (1 Jean 3:14) 'Dieu est amour; et celui qui demeure dans l'amour demeure en Dieu, et Dieu demeure en lui.' (1 Jean 4:16)"
  },
  {
    keywords: ["jude", "epitre jude", "faux docteurs", "contendre foi"],
    answer: "L'épître de Jude est un appel à combattre pour la foi face aux faux enseignants qui s'introduisent dans l'Église. Il cite des exemples de jugement de l'Ancien Testament. 'Ayez soin de vous conserver dans l'amour de Dieu.' (Jude 1:21) 'Contendez pour la foi qui a été transmise aux saints une fois pour toutes.' (Jude 1:3)"
  },

  // ===== PSAUMES PARTICULIERS =====
  {
    keywords: ["psaume 23", "berger", "vallee ombre mort"],
    answer: "Le Psaume 23 est le plus connu des Psaumes, écrit par David qui était berger. Il décrit Dieu comme un berger qui pourvoit, guide, protège et comble de bonté. 'L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles. Il restaure mon âme. Il me conduit dans les sentiers de la justice, à cause de son nom. Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi: ta houlette et ton bâton me rassurent. Tu dresses devant moi une table, en face de mes adversaires; tu oins d'huile ma tête, et ma coupe déborde. Oui, la bonté et la grâce me suivront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel pour toujours.' (Psaume 23)"
  },
  {
    keywords: ["psaume 91", "protection", "demeure souverain"],
    answer: "Le Psaume 91 est appelé le 'psaume de la protection': 'Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel: Mon refuge et ma forteresse, mon Dieu en qui je me confie! Car c'est lui qui te délivre du filet de l'oiseleur... Tu ne craindras ni les terreurs de la nuit, ni la flèche qui vole de jour, ni la peste qui marche dans les ténèbres, ni la contagion qui frappe en plein midi... Car il donnera ordre à ses anges de te garder dans toutes tes voies.' (Psaume 91:1-11)"
  },
  {
    keywords: ["psaume 119", "parole dieu", "aleph", "plus long"],
    answer: "Le Psaume 119 est le plus long chapitre de la Bible (176 versets), organisé en 22 sections selon l'alphabet hébraïque. Chaque verset (sauf quelques-uns) mentionne la Parole de Dieu sous différents termes: loi, témoignages, préceptes, commandements, statuts, jugements, parole. 'Je me réjouis en suivant tes préceptes, comme si je possédais de grands biens.' (Psaume 119:14) 'Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.' (Psaume 119:105)"
  },
  {
    keywords: ["psaume 139", "omnipresence", "forme", "connaissu"],
    answer: "Le Psaume 139 célèbre l'omniscience et l'omniprésence de Dieu: 'Éternel! tu me sondes et tu me connais. Tu sais quand je m'assieds et quand je me lève... Où irais-je loin de ton esprit, et où fuirais-je loin de ta face?... Tu as formé mes reins, tu m'as tissé dans le ventre de ma mère. Je te loue de ce que je suis une créature si merveilleuse.' (Psaume 139:1,7,13-14)"
  },
  {
    keywords: ["psaume 121", "secours", "montagne", "veilleur"],
    answer: "Le Psaume 121 est un cantique des montées, probablement chanté par les pèlerins allant à Jérusalem: 'Je lève les yeux vers les montagnes... D'où me viendra le secours? Le secours me vient de l'Éternel, qui a fait les cieux et la terre. Il ne permettra point que ton pied chancelle... L'Éternel est celui qui te garde.' (Psaume 121:1-5)"
  },
  {
    keywords: ["psaume 27", "confiance", "un seule chose"],
    answer: "Le Psaume 27 exprime une confiance profonde en Dieu malgré les ennemis: 'L'Éternel est ma lumière et mon salut: de qui aurais-je crainte?... Je demande à l'Éternel une seule chose, et c'est ce que je désire: habiter dans la maison de l'Éternel tous les jours de ma vie.' (Psaume 27:1,4)"
  },
  {
    keywords: ["psaume 103", "benefices", "pardonner iniquites"],
    answer: "Le Psaume 103 est un hymne de louange pour les bienfaits de Dieu: 'Mon âme, bénis l'Éternel, et que tout ce qui est en moi bénisse son saint nom! Mon âme, bénis l'Éternel, et n'oublie aucun de ses bienfaits! C'est lui qui pardonne toutes tes iniquités, qui guérit toutes tes maladies; c'est lui qui délivre ta vie de la fosse, qui te couronne de bonté et de miséricorde.' (Psaume 103:1-4)"
  },
  {
    keywords: ["psaume 150", "louange finale", "instruments"],
    answer: "Le Psaume 150 est le grand final du livre des Psaumes, un appel universel à la louange: 'Louez l'Éternel! Louez Dieu dans son sanctuaire! Louez-le dans l'étendue de l'espace où il est puissant! Louez-le pour ses hauts faits! Louez-le selon l'immensité de sa grandeur! Louez-le au son de la trompette! Louez-le avec le luth et la harpe!... Que tout ce qui respire loue l'Éternel! Louez l'Éternel!' (Psaume 150)"
  },

  // ===== PROVERBES CLÉS =====
  {
    keywords: ["proverbe sagesse", "sagesse proverbes", "craindre dieu"],
    answer: "Le livre des Proverbes enseigne que la sagesse commence par la crainte de l'Éternel: 'La crainte de l'Éternel est le commencement de la science; les insensés méprisent la sagesse et l'instruction.' (Proverbes 1:7) 'La crainte de l'Éternel est le commencement de la sagesse.' (Proverbes 9:10)"
  },
  {
    keywords: ["proverbe confiance", "reconnais ses voies"],
    answer: "'Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse; reconnais-le dans toutes tes voies, et il aplanira tes sentiers.' (Proverbes 3:5-6) Ce verset est l'un des plus mémorisés de la Bible."
  },
  {
    keywords: ["proverbe langue", "mots", "parole douce"],
    answer: "Les Proverbes ont beaucoup à dire sur la langue: 'Les paroles douces sont un rayon de miel, douces pour l'âme et salutaires pour le corps.' (Proverbes 16:24) 'La mort et la vie sont au pouvoir de la langue.' (Proverbes 18:21) 'Celui qui garde sa bouche garde son âme.' (Proverbes 13:3)"
  },
  {
    keywords: ["proverbe paresse", "paresseux", "diligence"],
    answer: "Les Proverbes mettent en garde contre la paresse: 'Un peu de sommeil, un peu d'assoupissement, un peu de croiser les mains pour rester couché... et la pauvreté te surprendra comme un rôdeur.' (Proverbes 6:10-11) 'La main des diligents vient à bout de tout.' (Proverbes 10:4)"
  },
  {
    keywords: ["proverbe ami", "amitie", "compagnon"],
    answer: "'L'ami aime en tout temps, et dans le malheur il se montre un frère.' (Proverbes 17:17) 'Celui qui fréquente les sages devient sage, mais celui qui fréquente les insensés s'y ruine.' (Proverbes 13:20) 'Les ferments ne se mêlent pas avec l'impureté.' (Proverbes 22:24-25 - ne pas fréquenter les coléreux)"
  },

  // ===== L'ECCLÉSIASTE =====
  {
    keywords: ["ecclesiaste", "vanite", "sens vie", "solomon"],
    answer: "L'Ecclésiaste, écrit par Salomon, explore le sens de la vie et conclut que tout sous le soleil est vanité sans Dieu. 'Vanité des vanités, dit l'Ecclésiaste, vanité des vanités, tout est vanité.' (Ecclésiaste 1:2) La conclusion: 'Crains Dieu et observe ses commandements. C'est là ce que doit faire tout homme.' (Ecclésiaste 12:13)"
  },
  {
    keywords: ["temps pour tout", "saison", "naissance mort", "ecclésiaste 3"],
    answer: "Le célèbre passage d'Ecclésiaste 3 sur les saisons de la vie: 'Il y a un temps pour tout, un temps pour toute chose sous les cieux: un temps pour naître, et un temps pour mourir; un temps pour planter, et un temps pour arracher ce qui a été planté... un temps pour pleurer, et un temps pour rire; un temps pour se lamenter, et un temps pour danser.' (Ecclésiaste 3:1-4)"
  },

  // ===== LE CANTIQUE DES CANTIQUES =====
  {
    keywords: ["cantique cantiques", "songe songs", "amour"],
    answer: "Le Cantique des Cantiques est un poème d'amour qui célèbre l'amour conjugal. Il est aussi lu allégoriquement comme l'amour entre Dieu et son peuple, ou Christ et l'Église. 'Que les baisers de ta bouche soient doux! Car ton amour est meilleur que le vin.' (Cantique 1:2) 'L'amour est fort comme la mort... Les grandes eaux ne peuvent éteindre l'amour.' (Cantique 8:6-7)"
  },

  // ===== LES DERNIERS MOTS DE JÉSUS SUR LA CROIX =====
  {
    keywords: ["sept paroles croix", "derniers mots jesus", "paroles croix"],
    answer: "Les sept dernières paroles de Jésus sur la croix:\n\n1. 'Père, pardonne-leur, car ils ne savent pas ce qu'ils font.' (Luc 23:34)\n2. 'Aujourd'hui, tu seras avec moi dans le paradis.' (Luc 23:43)\n3. 'Femme, voilà ton fils... Voilà ta mère.' (Jean 19:26-27)\n4. 'Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné?' (Matthieu 27:46)\n5. 'J'ai soif.' (Jean 19:28)\n6. 'Tout est accompli.' (Jean 19:30)\n7. 'Père, je remets mon esprit entre tes mains.' (Luc 23:46)"
  },

  // ===== LE LIVRE DE JOB =====
  {
    keywords: ["job", "souffrance juste", "satan", "calamites"],
    answer: "Le livre de Job traite du problème de la souffrance des justes. Job, homme intègre, perd tout mais refuse de maudire Dieu. Ses amis offrent des explications fausses. Dieu répond en révélant sa sagesse souveraine. Job est finalement restauré. 'L'Éternel a donné, l'Éternel a ôté; que le nom de l'Éternel soit béni!' (Job 1:21) 'Je sais que mon rédempteur est vivant.' (Job 19:25)"
  },

  // ===== LE LIVRE DU CANTIQUE DE MARIE =====
  {
    keywords: ["magnificat", "cantique marie", "mon ame exalte"],
    answer: "Le Magnificat est le cantique de Marie lors de sa visite à Élisabeth: 'Mon âme exalte le Seigneur, et mon esprit se réjouit en Dieu, mon sauveur, parce qu'il a jeté les yeux sur la bassesse de sa servante. Car voici, désormais toutes les générations me diront bienheureuse, parce que le Tout-Puissant a fait pour moi de grandes choses. Son nom est saint.' (Luc 1:46-49)"
  },

  // ===== CONSEILS DE VIE CHRÉTIENNE PRATIQUE =====
  {
    keywords: ["temoignage", "evangeliser", "annoncer", "partager foi"],
    answer: "Le témoignage chrétien est vital. Conseils bibliques:\n- Soyez préparés: 'Soyez toujours prêts à vous défendre, avec douceur et respect.' (1 Pierre 3:15)\n- Montrez l'amour: 'Que votre lumière luise ainsi devant les hommes.' (Matthieu 5:16)\n- Parlez avec sagesse: 'Que votre parole soit toujours accompagnée de grâce.' (Colossiens 4:6)\n- Vivez de manière cohérente: 'Que votre conduite soit honnête.' (Philippiens 2:15)"
  },
  {
    keywords: ["colere", "fureur", "irritation", "gestion colere"],
    answer: "La Bible ne condamne pas toute colère mais met en garde contre la colère injuste et prolongée: 'Que le soleil ne se couche pas sur votre colère.' (Éphésiens 4:26) 'L'homme lent à la colère est grand par l'intelligence.' (Proverbes 14:29) 'Celui qui est lent à la colère apaise les querelles.' (Proverbes 15:18) 'Que toute amertume, toute animosité, toute colère, toute clameur, toute calomnie, et toute espèce de méchanceté disparaissent du milieu de vous.' (Éphésiens 4:31)"
  },
  {
    keywords: ["sexualite", "purete", "fornication", "mariage intime"],
    answer: "La Bible enseigne que la sexualité est un don de Dieu à vivre dans le cadre du mariage: 'Que le mariage soit honoré de tous, et le lit conjugal exempt de souillure.' (Hébreux 13:4) 'Fuyez l'impudicité.' (1 Corinthiens 6:18) 'Votre corps est le temple du Saint-Esprit.' (1 Corinthiens 6:19) 'Que chacun de vous sache posséder son corps dans la sainteté et l'honnêteté.' (1 Thessaloniciens 4:4)"
  },
  {
    keywords: ["leadership", "diriger", "serviteur", "ancien"],
    answer: "Le leadership chrétien est basé sur le service: 'Celui qui veut être grand parmi vous sera votre serviteur.' (Marc 10:43) 'Ne dominez pas sur ceux qui vous sont échus en partage, mais soyez les modèles du troupeau.' (1 Pierre 5:3) 'L'ancien qui dirige bien l'Église... mérite un double honneur.' (1 Timothée 5:17) Les qualifications d'un ancien sont détaillées dans 1 Timothée 3:1-7 et Tite 1:5-9."
  },
  {
    keywords: ["communion", "eglise membre", "assembler", "communaute"],
    answer: "La communion fraternelle est essentielle pour la vie chrétienne: 'N'abandonnons pas notre assemblée, comme c'est la coutume de quelques-uns, mais exhortons-nous mutuellement.' (Hébreux 10:25) 'Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain, et dans les prières.' (Actes 2:42) 'Portez les fardeaux les uns des autres.' (Galates 6:2)"
  },
  {
    keywords: ["humilite", "orgueil", "arrogance", "abaissement"],
    answer: "L'humilité est une vertu fondamentale dans la Bible: 'Dieu résiste aux orgueilleux, mais il fait grâce aux humbles.' (Jacques 4:6) 'Ayez en vous les sentiments qui étaient dans le Christ Jésus, lequel, existant en forme de Dieu, n'a pas regardé comme une proie à arracher d'être égal avec Dieu, mais s'est dépouillé lui-même.' (Philippiens 2:5-7) 'Quiconque s'abaisse sera élevé.' (Luc 14:11)"
  },
  {
    keywords: ["patience", "endurance", "perseverance", "longanime"],
    answer: "La patience est un fruit de l'Esprit et une vertu souvent exhortée: 'La patience produit l'épreuve, et l'épreuve produit l'espérance.' (Romains 5:4) 'Que votre douceur soit connue de tous les hommes. Le Seigneur est proche.' (Philippiens 4:5) 'C'est par la patience que vous posséderez vos âmes.' (Luc 21:19) 'Frères, prenez pour modèle de patience la souffrance et la constance des prophètes.' (Jacques 5:10)"
  },
  {
    keywords: ["jugez pas", "jugement", "condamner", "critiquer"],
    answer: "Jésus met en garde contre le jugement hypocrite: 'Ne jugez point, afin que vous ne soyez point jugés. Car on vous jugera du jugement dont vous jugez.' (Matthieu 7:1-2) Mais cela ne signifie pas ne pas discerner le bien du mal: 'Ne jugez pas selon l'apparence, mais jugez selon la justice.' (Jean 7:24) 'Quiconque est spirituel juge de toutes choses.' (1 Corinthiens 2:15)"
  },
  {
    keywords: ["contentement", "satisfaction", "assez", "cupidite"],
    answer: "Le contentement est une vertu biblique: 'J'ai appris à être content de l'état où je me trouve. Je sais vivre dans l'abaissement, je sais vivre dans l'abondance.' (Philippiens 4:11-12) 'Il y a un grand gain dans la piété avec le contentement.' (1 Timothée 6:6) 'Ne te laisse pas emporter par la cupidité.' (Hébreux 13:5)"
  },
  {
    keywords: ["jeune", "jeuner", "abstinence nourriture"],
    answer: "Le jeûne est une discipline spirituelle pratiquée dans la Bible pour chercher Dieu intensément: 'Quand vous jeûnez, ne prenez pas un air triste... oins ta tête et lave ton visage, afin de ne pas montrer aux hommes que tu jeûnes.' (Matthieu 6:16-18) Le jeûne doit être accompagné de prière et de recherche sincère de Dieu, non de recherche d'approbation humaine."
  },

  // ===== DOCTRINES IMPORTANTES =====
  {
    keywords: ["justification", "declare juste", "foi seule"],
    answer: "La justification est l'acte par lequel Dieu déclare le pécheur juste, non par ses propres mérites mais par la justice de Christ imputée à celui qui croit. 'Étant justifiés par la foi, nous avons la paix avec Dieu par notre Seigneur Jésus-Christ.' (Romains 5:1) 'L'homme est justifié par la foi, sans les œuvres de la loi.' (Romains 3:28)"
  },
  {
    keywords: ["regeneration", "nouvelle naissance", "ne", "naitre"],
    answer: "La régénération est la nouvelle naissance spirituelle par le Saint-Esprit: 'En vérité, en vérité, je te le dis, si un homme ne naît de nouveau, il ne peut voir le royaume de Dieu.' (Jean 3:3) 'Selon sa grande miséricorde, il nous a régénérés par la résurrection de Jésus-Christ d'entre les morts.' (1 Pierre 1:3)"
  },
  {
    keywords: ["adoption", "enfant dieu", "fils"],
    answer: "L'adoption est l'acte par lequel Dieu fait des croyants ses enfants avec tous les privilèges qui y sont attachés: 'Voici quel amour le Père nous a témoigné, pour que nous soyons appelés enfants de Dieu!' (1 Jean 3:1) 'Vous avez reçu un Esprit d'adoption, par lequel nous crions: Abba! Père!' (Romains 8:15)"
  },
  {
    keywords: ["rédemption", "racheter", "prix", "esclave"],
    answer: "La rédemption est le rachat des pécheurs de l'esclavage du péché par le prix du sang de Christ: 'En lui nous avons la rédemption par son sang, la rémission des péchés.' (Éphésiens 1:7) 'Vous avez été rachetés à un grand prix.' (1 Corinthiens 6:20) 'Christ nous a rachetés de la malédiction de la loi.' (Galates 3:13)"
  },
  {
    keywords: ["propitiation", "apaisement", "colere dieu"],
    answer: "La propitiation est le sacrifice qui apaise la colère de Dieu contre le péché en satisfaisant sa justice: 'Dieu a présenté Christ comme propitiation par son sang.' (Romains 3:25) 'Il est la propitiation pour nos péchés.' (1 Jean 2:2) La mort du Christ a pleinement satisfait les exigences de la justice divine."
  },
  {
    keywords: ["gloire dieu", "but vie", "glorifier"],
    answer: "Le but suprême de la vie est de glorifier Dieu: 'Soit que vous mangiez, soit que vous buviez, faites tout pour la gloire de Dieu.' (1 Corinthiens 10:31) 'Tu as été créé pour moi, dit l'Éternel.' (Ésaïe 43:7) Le Petit Catéchisme de Westminster dit: 'Le but suprême de l'homme est de glorifier Dieu et de jouir de Lui pour toujours.'"
  },
  {
    keywords: ["creation ex nihilo", "creer rien", "dieu createur"],
    answer: "La Bible enseigne que Dieu a créé l'univers à partir de rien (ex nihilo) par sa parole: 'Au commencement, Dieu créa les cieux et la terre.' (Genèse 1:1) 'Par la foi, nous comprenons que les mondes ont été formés par la parole de Dieu.' (Hébreux 11:3) 'Il dit, et la chose existe; il ordonne, et elle se produit.' (Psaume 33:9)"
  },
  {
    keywords: ["peche originel", "chute", "nature peche", "adam eve peche"],
    answer: "Le péché originel est la corruption de la nature humaine transmise d'Adam à tous ses descendants: 'Par un seul homme le péché est entré dans le monde, et par le péché la mort.' (Romains 5:12) 'Nous étions tous par nature des enfants de colère.' (Éphésiens 2:3) 'Tous ont péché et sont privés de la gloire de Dieu.' (Romains 3:23)"
  },

  // ===== LA PRIÈRE DE JABEZ =====
  {
    keywords: ["jabez", "priere jabez", "elargis territoire"],
    answer: "La prière de Jabez est un modèle de prière audacieuse: 'Jabez invoqua le Dieu d'Israël, en disant: Oh! que tu me bénisses, que tu étendes mes limites, que ta main soit avec moi, et que tu me préserves du mal, afin que je ne sois pas dans la souffrance! Et Dieu accorda ce qu'il avait demandé.' (1 Chroniques 4:10)"
  },

  // ===== LES ATTRIBUTS DE DIEU =====
  {
    keywords: ["omniscience", "dieu sait tout", "connaissance dieu"],
    answer: "L'omniscience de Dieu signifie qu'il connaît toutes choses: passé, présent, futur, nos pensées et nos cœurs. 'L'Éternel regarde du haut des cieux, il voit tous les enfants des hommes.' (Psaume 33:13) 'Avant qu'une parole ne soit sur ma langue, tu la connais entièrement, ô Éternel!' (Psaume 139:4) 'Il connaît le secret des cœurs.' (Psaume 44:22)"
  },
  {
    keywords: ["omnipotence", "dieu tout-puissant", "puissance dieu"],
    answer: "L'omnipotence de Dieu signifie qu'il peut faire tout ce qui est conforme à sa nature: 'Rien n'est impossible à Dieu.' (Luc 1:37) 'Ce que Dieu a promis, il peut aussi l'accomplir.' (Romains 4:21) 'Notre Dieu est dans les cieux, il fait tout ce qu'il veut.' (Psaume 115:3)"
  },
  {
    keywords: ["omnipresence", "dieu partout", "present partout"],
    answer: "L'omniprésence de Dieu signifie qu'il est présent partout en même temps: 'Où irais-je loin de ton esprit, et où fuirais-je loin de ta face? Si je monte aux cieux, tu y es; et si je me couche au séjour des morts, t'y voilà.' (Psaume 139:7-8) 'Les cieux et les cieux des cieux ne peuvent te contenir.' (1 Rois 8:27)"
  },
  {
    keywords: ["immutabilite", "dieu change pas", "inchangeable"],
    answer: "L'immutabilité de Dieu signifie qu'il ne change pas dans son être, ses attributs, ses promesses ou ses desseins: 'Je suis l'Éternel, je ne change pas.' (Malachie 3:6) 'Toute bonne grâce et tout don parfait descendent d'en haut, du Père des lumières, chez lequel il n'y a ni variation ni ombre de changement.' (Jacques 1:17)"
  },
  {
    keywords: ["soverainete", "dieu controle", "providence"],
    answer: "La souveraineté de Dieu signifie qu'il règne sur toute sa création et accomplit tous ses desseins: 'L'Éternel a établi son trône dans les cieux, et son règne domine sur tout.' (Psaume 103:19) 'Il fait toutes choses selon le conseil de sa volonté.' (Éphésiens 1:11) 'Je suis Dieu, et il n'y en a point d'autre... j'annonce dès le commencement ce qui doit arriver.' (Ésaïe 46:9-10)"
  },
  {
    keywords: ["saintete dieu", "separe", "purer"],
    answer: "La sainteté de Dieu est sa séparation absolue du mal et sa perfection morale: 'Saint, saint, saint est l'Éternel des armées! Toute la terre est pleine de sa gloire!' (Ésaïe 6:3) 'Vos iniquités ont fait séparation entre vous et votre Dieu.' (Ésaïe 59:2) 'Soyez saints, car je suis saint.' (Lévitique 11:44)"
  },
  {
    keywords: ["justice dieu", "juste", "equitable"],
    answer: "La justice de Dieu signifie qu'il est parfaitement juste et qu'il ne peut tolérer le mal: 'La justice et l'équité sont la base de ton trône.' (Psaume 89:15) 'L'Éternel est juste, il aime la justice.' (Psaume 11:7) 'Il ne commet pas l'injustice.' (Deutéronome 32:4) La justice de Dieu a été satisfaite par la mort du Christ."
  },
  {
    keywords: ["misericorde dieu", "grace compassion", "tendre"],
    answer: "La miséricorde de Dieu est sa compassion pour les souffrants et les pécheurs: 'Les miséricordes de l'Éternel durent à toujours.' (Psaume 136) 'Riche en miséricorde, à cause du grand amour dont il nous a aimés.' (Éphésiens 2:4) 'Ses compassions ne sont pas à leur terme, elles se renouvellent chaque matin.' (Lamentations 3:22-23)"
  },

  // ===== PROPHÉTIES SUR LE RETOUR DU CHRIST =====
  {
    keywords: ["retour christ", "seconde venue", "parousie", "il revient"],
    answer: "La Bible enseigne le retour personnel, visible et glorieux de Jésus-Christ: 'Ce Jésus, qui a été enlevé au ciel du milieu de vous, viendra de la même manière que vous l'avez vu s'en aller au ciel.' (Actes 1:11) 'Car le Seigneur lui-même descendra du ciel.' (1 Thessaloniciens 4:16) 'Voici, il vient avec les nuées. Et tout œil le verra.' (Apocalypse 1:7)"
  },
  {
    keywords: ["signes fin", "derniers temps", "eschatologie"],
    answer: "Les signes des derniers temps selon Jésus (Matthieu 24) et d'autres passages:\n- Guerres et bruits de guerres\n- Tremblements de terre, famines, épidémies\n- Persécution des croyants\n- Faux prophètes et faux christs\n- L'Évangile prêché dans le monde entier\n- L'apostasie et le refroidissement de la charité\n'Mais de ce jour et de cette heure, personne ne sait.' (Matthieu 24:36) 'Veillez donc.' (Matthieu 24:42)"
  },
  {
    keywords: ["enlevement", "enlever", "nuages", "1 thessaloniciens 4"],
    answer: "L'enlèvement de l'Église est décrit dans 1 Thessaloniciens 4:16-17: 'Le Seigneur lui-même descendra du ciel, à un signal donné, à la voix d'un archange, et au son de la trompette de Dieu; et les morts en Christ ressusciteront premièrement. Ensuite, nous les vivants, qui serons restés, nous serons tous ensemble enlevés avec eux dans les nuées, à la rencontre du Seigneur dans les airs, et ainsi nous serons toujours avec le Seigneur.'"
  },
  {
    keywords: ["jugement dernier", "tremblement", "grand trone blanc"],
    answer: "La Bible enseigne un jugement final: 'Le morts, grands et petits, se tinrent devant le trône. Des livres furent ouverts. Et un autre livre fut ouvert, celui qui est le livre de vie. Les morts furent jugés d'après ce qui était écrit dans ces livres, selon leurs œuvres.' (Apocalypse 20:12) 'Il nous faut tous comparaître devant le tribunal de Christ.' (2 Corinthiens 5:10)"
  },
  {
    keywords: ["nouveau ciel", "nouvelle terre", "jerusalem celeste"],
    answer: "La destinée finale des croyants est un nouveau ciel et une nouvelle terre: 'Et je vis un nouveau ciel et une nouvelle terre; car le premier ciel et la première terre avaient disparu.' (Apocalypse 21:1) 'La sainte cité, la nouvelle Jérusalem, qui descendait du ciel d'auprès de Dieu.' (Apocalypse 21:2) 'Dieu essuiera toute larme de leurs yeux, et la mort ne sera plus.' (Apocalypse 21:4)"
  },

  // ===== TYPES ET FIGURES BIBLIQUES =====
  {
    keywords: ["type figure", "ombre realite", "prefiguration"],
    answer: "Un type biblique est une personne, un événement ou un objet de l'Ancien Testament qui préfigure une réalité du Nouveau Testament. Exemples:\n- Adam type de Christ (le second Adam)\n- L'arche de Noé type du salut en Christ\n- Le sacrifice d'Isaac type du sacrifice de Christ\n- La Pâque type de la mort du Christ\n- Le serpent d'airain type de la croix\n- Joseph type de Christ\n- Moïse type de Christ\n- L'arche de l'alliance type de Christ\n'Ces choses leur arrivaient pour servir d'exemples, et elles ont été écrites pour notre instruction.' (1 Corinthiens 10:11)"
  },
  {
    keywords: ["joseph type christ", "parallele joseph jesus"],
    answer: "Joseph est un type remarquable de Christ:\n- Aimé du père\n- Rejeté par ses frères\n- Vendu pour de l'argent\n- Faux accusé\n- Condamné injustement\n- Élevé à la plus haute position\n- Sauveur de son peuple pendant la famine\n- Celui par qui tous sont nourris\n'Vous aviez médité de me faire du mal; Dieu l'a changé en bien.' (Genèse 50:20)"
  },

  // ===== LES SACRIFICES DE L'ANCIEN TESTAMENT =====
  {
    keywords: ["sacrifice", "holocauste", "ancien testament"],
    answer: "Les principaux sacrifices de l'Ancien Testament:\n1. HOLOCAUSTE: entièrement consumé sur l'autel, exprimant la consécration totale (Lévitique 1)\n2. OFFRANDE ALIMENTAIRE: offrande de farine et d'huile, exprimant la gratitude (Lévitique 2)\n3. SACRIFICE DE PAIX: communion avec Dieu, partie mangée par le sacrificateur (Lévitique 3)\n4. SACRIFICE POUR LE PÉCHÉ: expiation pour les péchés involontaires (Lévitique 4)\n5. SACRIFICE DE CULPABILITÉ: expiation quand le péché causait un dommage (Lévitique 5)\nTous préfigurent le sacrifice unique de Christ: 'Il n'a pas besoin, comme les souverains sacrificateurs, d'offrir chaque jour des sacrifices.' (Hébreux 7:27)"
  },

  // ===== LOUANGE ET ADORATION =====
  {
    keywords: ["louange", "adoration", "adorer dieu", "chant"],
    answer: "La louange et l'adoration sont essentielles dans la Bible:\n- 'Louez-le au son de la trompette!' (Psaume 150:3)\n- 'Adorez l'Éternel en beauté de sainteté!' (Psaume 29:2)\n- 'Dieu est esprit, et il faut que ceux qui l'adorent l'adorent en esprit et en vérité.' (Jean 4:24)\n- 'Par lui, offrons sans cesse à Dieu un sacrifice de louange, c'est-à-dire le fruit de lèvres qui confessent son nom.' (Hébreux 13:15)\nL'adoration vraie n'est pas seulement musicale mais engage tout l'être: cœur, esprit et vie."
  },
  {
    keywords: ["clapper mains", "lever mains", "gestures louange"],
    answer: "La Bible mentionne diverses expressions physiques de louange:\n- Baisser les mains: 'Je veux que les hommes prient en tout lieu, en levant des mains pures.' (1 Timothée 2:8)\n- Battre des mains: 'Battez des mains, peuples tous!' (Psaume 47:2)\n- Se prosterner: 'Venez, prosternons-nous et humilions-nous.' (Psaume 95:6)\n- Danser: 'Louez son nom avec des danses!' (Psaume 149:3)\n- Crier de joie: 'Poussez des cris de joie!' (Psaume 100:1)"
  },

  // ===== DONS SPIRITUELS DÉTAILLÉS =====
  {
    keywords: ["don prophetie", "prophetes eglise", "parler dieu"],
    answer: "Le don de prophétie est la capacité de recevoir et de communiquer un message direct de Dieu pour l'édification, l'exhortation et la consolation de l'Église: 'Celui qui prophétise parle aux hommes pour l'édification, l'exhortation et la consolation.' (1 Corinthiens 14:3) 'N'éteignez pas l'Esprit. Ne méprisez pas les prophéties.' (1 Thessaloniciens 5:19-20) La prophétie doit être jugée par l'Église et ne jamais contredire la Parole écrite."
  },
  {
    keywords: ["don guerison", "guerir malades", "imposition mains"],
    answer: "Le don de guérison est la capacité surnaturelle de guérir des maladies au nom de Jésus: 'Les signes qui accompagneront ceux qui auront cru: ils imposeront les mains aux malades, et les malades seront guéris.' (Marc 16:18) La guérison n'est pas garantie dans tous les cas mais le don existe pour témoigner de la compassion de Dieu. Paul lui-même avait un 'écharde dans la chair' qui n'a pas été guérie (2 Corinthiens 12:7-9)."
  },
  {
    keywords: ["don langues", "parler langues", "glossolalie"],
    answer: "Le don des langues est la capacité de parler dans une langue que l'on n'a pas apprise (langue humaine ou angélique). Il y a deux usages:\n1. Langues comme signe pour les incroyants (Actes 2:1-11)\n2. Langues pour la prière personnelle, accompagnées de l'interprétation dans l'assemblée (1 Corinthiens 14)\n'Je veux que vous parliez tous en langues, mais encore plus que vous prophétisiez.' (1 Corinthiens 14:5) 'S'il n'y a pas d'interprète, qu'on se taise dans l'assemblée.' (1 Corinthiens 14:28)"
  },
  {
    keywords: ["don discernement", "discerner esprits", "sagesse spirituelle"],
    answer: "Le don de discernement des esprits est la capacité de distinguer l'origine spirituelle (Dieu, l'homme ou Satan) de manifestations, enseignements ou situations: 'À l'un est donné par l'Esprit le discernement des esprits.' (1 Corinthiens 12:10) 'Bien-aimés, n'ajoutez pas foi à tout esprit, mais éprouvez les esprits, pour savoir s'ils sont de Dieu.' (1 Jean 4:1) Ce don est crucial pour protéger l'Église des faux enseignements."
  },

  // ===== CHANTS ET CANTIQUES BIBLIQUES =====
  {
    keywords: ["cantique moise", "chant mer rouge", "exode 15"],
    answer: "Le cantique de Moïse (Exode 15) est le premier cantique biblique, chanté après la traversée de la mer Rouge: 'Je chanterai à l'Éternel, car il a fait éclater sa gloire... L'Éternel est un guerrier, l'Éternel est son nom... Ta droite, ô Éternel! a écrasé l'ennemi... L'Éternel régnera éternellement et à toujours!' (Exode 15:1-18)"
  },
  {
    keywords: ["cantique marie", "magnificat", "anne elisabeth"],
    answer: "Le Magnificat (Luc 1:46-55) est le cantique de Marie lors de sa visite à Élisabeth: 'Mon âme exalte le Seigneur, et mon esprit se réjouit en Dieu, mon sauveur, parce qu'il a jeté les yeux sur la bassesse de sa servante... Sa miséricorde s'étend d'âge en âge sur ceux qui le craignent.'"
  },
  {
    keywords: ["cantique simon", "nunc dimittis", "vieillard temple"],
    answer: "Le cantique de Siméon (Luc 2:29-32) a été prononcé quand Jésus a été présenté au temple: 'Maintenant, Seigneur, tu laisses ton serviteur s'en aller en paix, selon ta parole. Car mes yeux ont vu ton salut, salut que tu as préparé devant tous les peuples, lumière pour éclairer les nations, et gloire de ton peuple d'Israël.'"
  },
  {
    keywords: ["cantique zacharie", "benedictus", "naissance jean"],
    answer: "Le cantique de Zacharie (Luc 1:68-79) a été prononcé à la naissance de Jean-Baptiste: 'Béni soit le Seigneur, le Dieu d'Israël, de ce qu'il a visité et racheté son peuple... Tu enfanteras un fils, et tu lui donneras le nom de Jean... Et toi, petit enfant, tu seras appelé prophète du Très-Haut.'"
  },

  // ===== LIVRES POÉTIQUES =====
  {
    keywords: ["lamentations", "pleurs jerusalem", "destruction ville"],
    answer: "Les Lamentations de Jérémie sont des poèmes de deuil sur la destruction de Jérusalem en 586 av. J.-C. Malgré la tristesse, ils contiennent une note d'espérance: 'Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme; elles se renouvellent chaque matin. Grande est ta fidélité!' (Lamentations 3:22-23)"
  },

  // ===== CONSEILS POUR L'ÉTUDE BIBLIQUE =====
  {
    keywords: ["methode etude", "comment etudier", "inductive"],
    answer: "La méthode inductive d'étude biblique en 3 étapes:\n\n1. OBSERVATION: Que dit le texte? (Qui? Quoi? Quand? Où? Pourquoi? Comment?)\n2. INTERPRÉTATION: Que signifie le texte dans son contexte? (Contexte historique, culturel, littéraire, comparaison avec d'autres passages)\n3. APPLICATION: Comment ce texte s'applique-t-il à ma vie?\n'Tâche de te présenter devant Dieu comme un homme éprouvé, un ouvrier qui n'a point à rougir, qui dispense droitement la parole de la vérité.' (2 Timothée 2:15)"
  },
  {
    keywords: ["contexte biblique", "interpreter", "ne pas deformer"],
    answer: "Principes d'interprétation biblique:\n- Le texte ne peut pas signifier ce qu'il n'a jamais pu signifier pour l'auteur original\n- Interprétez chaque passage dans son contexte immédiat et dans le contexte plus large de la Bible\n- Comparez l'Écriture avec l'Écriture\n- Distinguez entre descriptif (ce qui était) et prescriptif (ce qui doit être fait)\n- Tenez compte du genre littéraire (poésie, histoire, prophétie, apocalypse)\n'Aucune prophétie de l'Écriture ne peut être un objet d'interprétation particulière.' (2 Pierre 1:20)"
  },

  // ===== DIFFICULTÉS BIBLIQUES =====
  {
    keywords: ["contradiction bible", "difficulte bible", "probleme texte"],
    answer: "Face aux difficultés bibliques apparentes:\n- La plupart des 'contradictions' s'expliquent par le contexte ou la traduction\n- Les différences dans les Évangiles reflètent des perspectives différentes, non des erreurs\n- Les nombres ronds étaient courants dans l'Antiquité\n- Les copistes ont parfois introduit des variantes mineures\n- La science archéologique a confirmé la fiabilité de la Bible à maintes reprises\n'La parole de notre Dieu subsiste éternellement.' (Ésaïe 40:8) 'Toute l'Écriture est divinement inspirée.' (2 Timothée 3:16)"
  },
  {
    keywords: ["inspiration bible", "parole dieu", "sans erreur"],
    answer: "La doctrine de l'inspiration affirme que Dieu a supervisé la rédaction de la Bible de sorte que les auteurs humains ont écrit exactement ce que Dieu voulait communiquer, tout en utilisant leur propre style et personnalité. 'Toute l'Écriture est inspirée de Dieu.' (2 Timothée 3:16) 'Car ce n'est pas par une volonté d'homme qu'une prophétie a jamais été apportée, mais c'est poussés par le Saint-Esprit que des hommes ont parlé de la part de Dieu.' (2 Pierre 1:21)"
  },
  {
    keywords: ["canon bible", "livres canoniques", "pourquoi 66 livres"],
    answer: "Le canon biblique (66 livres) s'est formé progressivement. Les critères de canonicité:\n1. Inspiration divine (le livre vient-il de Dieu?)\n2. Authenticité apostolique (écrit par un apôtre ou sous son autorité)\n3. Reconnaissance par l'Église universelle\n4. Cohérence avec la révélation existante\nL'Ancien Testament a été fixé au temps d'Esdras. Le Nouveau Testament a été progressivement reconnu et formellement confirmé au 4e siècle. 'La sainte Écriture peut te rendre sage à salut par la foi en Jésus-Christ.' (2 Timothée 3:15)"
  },

  // ===== PLAN DE LECTURE BIBLIQUE DÉTAILLÉ =====
  {
    keywords: ["plan lecture 1 an", "lire bible an", "lecture quotidienne"],
    answer: "Plan de lecture de la Bible en 1 an (environ 3-4 chapitres par jour):\n\nJANVIER: Genèse 1-50, Psaumes 1-25\nFÉVRIER: Exode 1-40, Lévitique 1-27, Psaumes 26-50\nMARS: Nombres 1-36, Deutéronome 1-34, Psaumes 51-75\nAVRIL: Josué 1-24, Juges 1-21, Ruth, 1 Samuel 1-31\nMAI: 2 Samuel 1-24, 1 Rois 1-22, Psaumes 76-100\nJUIN: 2 Rois 1-25, 1 Chroniques 1-29, Psaumes 101-125\nJUILLET: 2 Chroniques 1-36, Esdras, Néhémie, Esther\nAOÛT: Job, Proverbes, Ecclésiaste, Cantique\nSEPT: Ésaïe 1-66, Jérémie 1-52\nOCT: Lamentations, Ézéchiel 1-48, Daniel\nNOV: Osée-Malachie (petits prophètes), Matthieu\nDÉC: Marc, Luc, Jean, Actes, Romains-Apocalypse\n'Comment le jeune homme rendra-t-il pur son sentier? En se conformant à ta parole.' (Psaume 119:9)"
  },

  // ===== VERSETS POUR CHAQUE JOUR DE LA SEMAINE =====
  {
    keywords: ["verset jour", "verset quotidien", "meditation jour"],
    answer: "Versets pour méditer chaque jour:\n\nLUNDI (Commencement): 'Les compassions de l'Éternel se renouvellent chaque matin.' (Lamentations 3:22-23)\n\nMARDI (Force): 'Tout je peux dans celui qui me fortifie.' (Philippiens 4:13)\n\nMERCREDI (Direction): 'Le juste sera averti par ta grâce.' (Psaume 94:12)\n\nJEUDI (Paix): 'La paix de Dieu garde vos cœurs et vos pensées.' (Philippiens 4:7)\n\nVENDREDI (Foi): 'Sans la foi il est impossible de plaire à Dieu.' (Hébreux 11:6)\n\nSAMEDI (Repos): 'Venez à moi, vous tous qui êtes fatigués.' (Matthieu 11:28)\n\nDIMANCHE (Louange): 'Entrons dans ses parvis avec des louanges!' (Psaume 100:4)"
  },

  // ===== LES NOMBRES DANS LA BIBLE =====
  {
    keywords: ["nombre 7", "sept", "perfection", "chiffre 7"],
    answer: "Le nombre 7 est le nombre de la perfection divine dans la Bible:\n- 7 jours de la création\n- 7 églises d'Apocalypse\n- 7 sceaux, 7 trompettes, 7 coupes\n- 7 dons de l'Esprit (Ésaïe 11:2)\n- 70 fois 7 fois pardonner (Matthieu 18:22)\n- 7 paroles sur la croix\n- Jésus a dit 7 'Je suis' dans Jean"
  },
  {
    keywords: ["nombre 12", "douze", "tribus", "aportres"],
    answer: "Le nombre 12 représente le peuple de Dieu:\n- 12 tribus d'Israël\n- 12 apôtres\n- 12 portes de la nouvelle Jérusalem\n- 12 fondements de la nouvelle Jérusalem\n- 12 000 de chaque tribu scellés (Apocalypse 7)\n- Les 12 représentaient le peuple complet de Dieu"
  },
  {
    keywords: ["nombre 40", "quarante", "preuve", "desert"],
    answer: "Le nombre 40 représente souvent une période d'épreuve ou de préparation:\n- 40 jours du déluge\n- 40 ans dans le désert\n- 40 jours de jeûne de Jésus\n- 40 jours de Jésus après la résurrection\n- Moïse 40 jours sur le mont Sinaï (2 fois)\n- 40 jours d'Élie au mont Horeb\n- 950 ans: Noé a prêché 120 ans (Génèse 6:3), puis déluge"
  },

  // ===== CROYANCES CBCA =====
  {
    keywords: ["confession foi", "ce que croyons", "doctrine eglise", "croyance"],
    answer: "La CBCA (Communauté Baptiste du Centre de l'Afrique) croit en:\n- La Trinité: un seul Dieu en trois personnes\n- L'inspiration et l'inerrance de la Bible\n- La dépravation totale de l'homme par le péché\n- Le salut par la grâce seule, par la foi seule, en Christ seul\n- Le baptême du croyant par immersion\n- L'autonomie de l'Église locale\n- La séparation de l'Église et de l'État\n- Le sacerdoce universel des croyants\n- Le retour personnel et visible de Christ\n'Car c'est par la grâce que vous êtes sauvés.' (Éphésiens 2:8)"
  },
  {
    keywords: ["baptiste", "que signifie", "origine baptiste"],
    answer: "Le nom 'baptiste' vient de l'accent mis sur le baptême biblique des croyants par immersion, suite à une profession de foi personnelle. Les baptistes valorisent:\n- L'autorité suprême de la Bible\n- Le sacerdoce de chaque croyant (accès direct à Dieu)\n- L'autonomie de l'Église locale\n- La liberté religieuse\n- La séparation Église-État\n'Celui qui croira et qui sera baptisé sera sauvé.' (Marc 16:16)"
  },

  // ===== HISTOIRE DU CHRISTIANISME EN RDC =====
  {
    keywords: ["histoire eglise rdc", "christianisme congo", "evangile congo"],
    answer: "Le christianisme est arrivé en RDC avec les missionnaires dès le 16e siècle, mais l'évangélisation massive a commencé au 19e siècle. La CBCA a été fondée en 1926 par la Baptist Missionary Society (BMS) britannique dans la région du Kivu. Malgré les persécutions, les guerres et les difficultés, l'Église a grandi et compte aujourd'hui des centaines de milliers de membres. 'Les portes du hades ne prévaudront point contre elle.' (Matthieu 16:18)"
  },

  // ===== CONSEILS POUR NOUVEAUX CROYANTS =====
  {
    keywords: ["nouveau converti", "nouveau croyant", "debuter foi", "commencer avec dieu"],
    answer: "Conseils pour un nouveau croyant:\n\n1. LISEZ LA BIBLE chaque jour, commencez par l'Évangile de Jean\n2. PRIEZ chaque jour, parlez à Dieu simplement\n3. ASSISTEZ AU CULTE chaque dimanche\n4. PARTICIPEZ à un groupe de maison/étude biblique\n5. SOYEZ BAPTISÉ si vous ne l'êtes pas encore\n6. TÉMOIGNEZ de votre foi à votre entourage\n7. RENONCEZ au péché et vivez une vie sainte\n8. CHERCHEZ LA COMMUNION avec d'autres croyants\n\n'Désirez, comme des enfants nouveau-nés, le lait spirituel et pur.' (1 Pierre 2:2)"
  },

  // ===== PRIÈRES POUR DIFFÉRENTES SITUATIONS =====
  {
    keywords: ["priere confession", "avouer peche", "repentir priere"],
    answer: "Modèle de prière de confession:\n'Seigneur Dieu, je reconnais que j'ai péché contre toi par mes pensées, mes paroles et mes actions. Je suis désolé(e) et je me repens. Merci pour ton pardon promis dans 1 Jean 1:9. Purifie-moi par le sang de Jésus. Aide-moi à marcher dans ta sainteté. Au nom de Jésus, amen.'\n\n'Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner.' (1 Jean 1:9)"
  },
  {
    keywords: ["priere gratitude", "remercier dieu", "actions grace"],
    answer: "Modèle de prière de gratitude:\n'Seigneur, je te remercie pour ta bonté envers moi. Merci pour la vie, la santé, la famille, et surtout pour le salut en Jésus-Christ. Merci que tu pourvois à tous mes besoins. Ouvre mes yeux pour voir tes bénédictions chaque jour. Au nom de Jésus, amen.'\n\n'Entrez dans ses portes avec des actions de grâces, dans ses parvis avec des louanges!' (Psaume 100:4)"
  },
  {
    keywords: ["priere intercession", "prier autres", "interceder"],
    answer: "Modèle de prière d'intercession:\n'Seigneur, je te confie [nom de la personne]. Tu la connais et tu l'aimes. Je te demande de toucher son cœur, de guérir son corps, de sauver son âme. Fais ta volonté dans sa vie. Donne-moi l'amour et la persévérance pour continuer à prier pour elle. Au nom de Jésus, amen.'\n\n'Je supplie pour les païens... pour que Dieu leur accorde le salut.' (Romains 10:1) 'Priez les uns pour les autres.' (Jacques 5:16)"
  },
    // ===== PRIÈRES POUR NOUVEAUX CHRÉTIENS : AVANT DE MANGER (OBLIGATOIRE À APPRENDRE) =====
  {
    keywords: ["prier avant manger", "benediction repas", "nouveau croyant repas", "merci pour nourriture"],
    answer: "Voici 3 prières simples que tout nouveau chrétien doit apprendre pour bénir sa nourriture :\n\n1. LA PLUS SIMPLE : 'Seigneur, je te remercie pour cette nourriture. Bénis-la pour mon corps. Au nom de Jésus, amen.' (Basée sur l'action de grâce de Jésus dans Matthieu 15:36)\n\n2. RECONNAISSANCE POUR LA PROVISION : 'Père céleste, merci car tu pourvois à tous mes besoins. Que cette nourriture me donne la force de te servir aujourd'hui. Au nom de Jésus, amen.' (Basée sur Matthieu 6:11 - 'Donne-nous aujourd'hui notre pain quotidien')\n\n3. LA PRIÈRE COMPLÈTE : 'Dieu tout-puissant, je reconnais que tout don parfait vient d'en haut. Je te demande de bénir cette table et ceux qui la partagent. Que ce repas fortifie mon corps pour accomplir ta volonté. Au nom de Jésus-Christ, amen.' (Basée sur Jacques 1:17 et 1 Corinthiens 10:31 - 'Faites tout pour la gloire de Dieu')"
  },
  {
    keywords: ["pourquoi bénir nourriture", "interdire manger sans prier", "viande offerte aux idoles"],
    answer: "Bénir sa nourriture n'est pas une simple tradition, c'est reconnaître que Dieu est le pourvoyeur. Jésus a montré l'exemple : 'Il prit les sept pains et les poissons, et, après avoir rendu grâces, il les rompit.' (Matthieu 15:36). L'apôtre Paul enseigne que pour un chrétien, 'tout est pur' (Romains 14:20), mais nous devons manger 'avec action de grâces' (1 Timothée 4:4). Bénir son repas, c'est sanctifier (mettre à part) ce que Dieu nous donne."
  },

  // ===== PRIÈRES POUR ENFANTS (3 ANS - 10 ANS) =====
  {
    keywords: ["priere enfant", "prier pour petit", "enfant 3 ans", "enfant 5 ans", "enfant 8 ans"],
    answer: "Les prières pour les enfants doivent être courtes, joyeuses et faciles à mémoriser. Jésus a dit : 'Laissez les petits enfants venir à moi.' (Marc 10:14). Apprenez-leur à parler à Dieu comme à un ami, un Père aimant. Voici des modèles adaptés selon leurs situations !"
  },
  {
    keywords: ["priere enfant malade", "guerison petit", "enfant a mal", "douleur enfant"],
    answer: "PRIÈRE D'UN ENFANT MALADE :\n'Jésus, tu es le bon docteur. J'ai mal [l'enfant dit où il a mal], mais tu as dit que tu guérissais les malades. S'il te plaît, pose ta main douce sur moi et enlève ma douleur. Merci de m'aimer fort. Amen.'\n\nVerset à apprendre à l'enfant : 'Jésus guérissait tous les malades.' (Matthieu 8:16)"
  },
  {
    keywords: ["priere peur enfant", "cauchemar", "peur noir", "enfant effrayé", "monstre"],
    answer: "PRIÈRE QUAND L'ENFANT A PEUR (la nuit, etc.) :\n'Dieu, j'ai un peu peur maintenant. Mais tu as dit dans la Bible que tu es plus fort que tout ! Je te demande d'envoyer ton ange pour garder ma chambre. Tu es avec moi, donc je n'ai plus peur. Merci Seigneur. Amen.'\n\nVerset à apprendre à l'enfant : 'Ne crains rien, car je suis avec toi.' (Ésaïe 41:10)"
  },
  {
    keywords: ["priere école enfant", "école primaire", "maîtresse", "copains", "apprendre leçon"],
    answer: "PRIÈRE AVANT D'ALLER À L'ÉCOLE :\n'Seigneur, je vais à l'école aujourd'hui. Donne-moi une bonne mémoire pour bien apprendre mes leçons. Aide-moi à être sage, à écouter la maîtresse, et à être gentil avec mes copains. Au nom de Jésus, amen.'\n\nVerset à apprendre à l'enfant : 'La sagesse vient d'en haut.' (Jacques 3:17)"
  },
  {
    keywords: ["priere soir enfant", "dormir enfant", "coucher petit", "lit enfant"],
    answer: "PRIÈRE DU SOIR POUR ENFANT :\n'Merci Dieu pour cette belle journée. Je suis fatigué(e), je vais me coucher. Garde-moi toute la nuit avec tes anges. Demain matin, je veux encore te faire plaisir. Bonne nuit, Jésus. Amen.'\n\nVerset à apprendre à l'enfant : 'Je me couche et je m'endors en paix, car toi seul, Éternel, tu me fais habiter en sécurité.' (Psaume 4:9)"
  },

  // ===== PRIÈRES POUR JEUNES/ADOLESCENTS (11 ANS - 17 ANS) =====
  {
    keywords: ["priere jeune", "priere ado", "adolescent", "11 ans", "15 ans", "lycéen"],
    answer: "L'adolescence est une période de choix et de pression. La Bible dit de Timothée, un jeune homme : 'Que personne ne méprise ta jeunesse.' (1 Timothée 4:12). Vos prières peuvent devenir plus profondes, en utilisant la Parole de Dieu comme une arme."
  },
  {
    keywords: ["priere tentation jeune", "resister peche ado", "pornographie", "mensonge", "mauvaise frequentation"],
    answer: "PRIÈRE CONTRE LA TENTATION (Pour les jeunes) :\n'Seigneur, je suis confronté(e) à la tentation en ce moment. Ta Parole dit que tu ne permets pas que je sois tenté(e) au-delà de mes forces. Je refuse de céder au péché. Donne-moi le courage de fuir comme Joseph a fui l'épouse de Potiphar. Remplis-moi de ton Saint-Esprit pour que je puisses dire NON. Au nom de Jésus.'\n\nVerset à méditer : 'Soumettez-vous donc à Dieu; résistez au diable, et il fuira loin de vous.' (Jacques 4:7)"
  },
  {
    keywords: ["priere examen jeune", "révision", "bulletin", "etat", "blocus", "test"],
    answer: "PRIÈRE POUR LES EXAMENS ET ÉTUDES :\n'Dieu de sagesse, tu es le créateur de l'intelligence. Mes examens approchent et je stresse. Je te demande la paix dans mon esprit, une bonne concentration, et une mémoire excellente. Je ne veux pas tricher, je m'appuie sur ton aide. 'Tu me donnes la sagesse et l'intelligence.' (Jérémie 51:17). Au nom de Jésus, amen.'\n\nConseil : Étudiez vos leçons, car 'la foi sans les œuvres est morte' (Jacques 2:26) !"
  },
  {
    keywords: ["priere identité jeune", "complexes", "acceptation", "apparence", "dépression ado"],
    answer: "PRIÈRE QUAND ON SE SENT MAL DANS SA PEAU :\n'Père céleste, parfois je ne m'aime pas, je me compare aux autres. Mais ta Parole dit que tu m'as façonné(e) dans le ventre de ma mère et que je suis une créature merveilleuse. Aide-moi à voir mon corps et ma personnalité à travers tes yeux. Je suis unique et tu as un plan pour moi. Au nom de Jésus.'\n\nVerset clé : 'Je te loue de ce que je suis une créature si merveilleuse.' (Psaume 139:14)"
  },
  {
    keywords: ["priere pression amis", "rejet", "moquerie", "temoignage college lycee"],
    answer: "PRIÈRE FACE À LA PRESSION DES AMIS :\n'Seigneur, mes amis me poussent à faire des choses qui ne te plaisent pas. Donne-moi la force de ne pas avoir honte de l'Évangile. Fais de moi une lumière dans mon collège/lycée. Si je dois être rejeté(e) à cause de toi, que ta joie remplisse mon cœur. 'Celui qui aura honte de moi... le Fils de l'homme aura honte de lui.' (Marc 8:38). Au nom de Jésus.'"
  },

  // ===== PRIÈRES POUR ADULTES (18 ANS ET PLUS) =====
  {
    keywords: ["priere adulte", "prier comme un adulte", "vie spirituelle profonde", "18 ans et plus"],
    answer: "La prière adulte est marquée par l'engagement, la responsabilité et une recherche de l'intimité avec Dieu. Elle implique souvent l'intercession pour sa famille, son travail, et une soumission plus profonde à la souveraineté de Dieu. 'Veillez et priez, afin que vous ne tombiez pas en tentation.' (Matthieu 26:41)"
  },
  {
    keywords: ["priere tentation adulte", "lutte spirituelle", "chute", "addiction", "impurete"],
    answer: "PRIÈRE DE DÉLIVRANCE ET DE FORCE CONTRE LA TENTATION :\n'Père, je reconnais ma faiblesse. Cette tentation [nommez-la si possible] est forte, mais tu es plus fort. Je me revêts de l'armure de Dieu, et je prends le bouclier de la foi pour éteindre les traits enflammés du malin. Que le Sang de Jésus me purifie. Coupe tout lien maléfique et donne-moi un esprit de maîtrise de soi. Au nom puissant de Jésus-Christ.'\n\nMéditation : 'Dieu est fidèle, il ne permettra pas que vous soyez tentés au-delà de vos forces; mais avec la tentation il préparera aussi le moyen d'en sortir.' (1 Corinthiens 10:13)"
  },
  {
    keywords: ["priere maladie chronique", "maladie adulte", "souffrance corps", "hospitalisation"],
    answer: "PRIÈRE POUR LA GUÉRISON D'UNE MALADIE GRAVE/CHRONIQUE :\n'Éternel, tu es Jéhovah Rapha, le Dieu qui me guérit. Je m'appuie sur ta promesse : Par ses meurtrissures, je suis guéri (Ésaïe 53:5). Je déclare la vie et la santé sur mon corps. Si ta volonté est de me guérir maintenant, que ta puissance me traverse. Si ta volonté est que je traverse cette épreuve, donne-moi la grâce de te glorifier dans la souffrance, comme Job. Que ta paix qui surpasse toute intelligence garde mon cœur. Au nom de Jésus.'\n\nAction : N'oubliez pas de consulter un médecin, car Dieu utilise aussi la science. 'Le médecin est nécessaire à celui qui est malade.' (Ecclésiaste 38:1 - Apocryphe, mais principe biblique reconnu via Luc le médecin)."
  },
  {
    keywords: ["priere finance adulte", "dettes", "chomage", "manque argent", "famille a faim"],
    answer: "PRIÈRE DE PROVISION FINANCIÈRE :\n'Seigneur, ta Parole dit que tu pourvois à tous nos besoins selon ta richesse (Philippiens 4:19). En ce moment, je fais face à des difficultés financières [chômage, dettes, etc.]. Je ne veux pas servir l'argent, mais te faire confiance. Ouvre les fenêtres du ciel. Donne-moi la sagesse pour bien gérer ce que j'ai, et ouvre-moi des portes de travail légitime. Je déclare la percée financière dans ma vie. Au nom de Jésus.'\n\nMise en garde : 'Ceux qui veulent s'enrichir tombent dans la tentation.' (1 Timothée 6:9). Travaillez honnêtement et donnez la dîme (Proverbes 3:9-10)."
  },
  {
    keywords: ["priere couple mariage", "conflit conjoint", "crise familiale", "divorce", "infidelite"],
    answer: "PRIÈRE POUR SAUVER/RENFORCER SON MARIAGE :\n'Dieu d'alliance, tu as dit : Ce que Dieu a joint, que l'homme ne le sépare pas (Marc 10:9). Il y a des tempêtes dans mon foyer. Je te demande de faire couler ton huile de réconciliation sur notre couple. Pardonne-nous nos orgueils. Aide-nous à nous supporter mutuellement et à nous pardonner comme tu nous as pardonnés. Que l'amour ne soit pas une simple émotion, mais un engagement. Au nom de Jésus.'\n\nConseil pratique : 'Que le soleil ne se couche pas sur votre colère.' (Éphésiens 4:26). Parlez-en avec un ancien de l'église si la crise persiste."
  },
  {
    keywords: ["priere travail adulte", "patron difficile", "collegue toxique", "promotion", "licenciement"],
    answer: "PRIÈRE POUR LA VIE PROFESSIONNELLE :\n'Seigneur, je te soumets mon travail. Tu es mon véritable employeur. Donne-moi l'intégrité, même quand personne ne regarde. Si mon patron est difficile, donne-moi la sagesse de servir comme si je servais le Christ (Éphésiens 6:5-7). Ouvre les portes de promotion au bon moment, ou donne-moi la paix si tu veux me déplacer ailleurs. Que ma vie au travail pousse mes collègues à te poser des questions. Au nom de Jésus.'"
  },
  {
    keywords: ["priere intercession adulte", "prier pour ses enfants", "prier pour conjoint", "prier famille"],
    answer: "MODÈLE D'INTERCESSION POUR SA FAMILLE :\n'Père, je me lève aujourd'hui comme le prêtre de ma maison. Je couvre mon conjoint, mes enfants et mes parents du sang de Jésus. Que l'ange de l'Éternel campe autour de ceux qui le craignent (Psaume 34:8). Arrache toute racine de rébellion chez mes enfants, donne-leur un cœur tendre vers toi. Que ma maison soit un lieu de paix et non un champ de bataille. Au nom de Jésus.'\n\nRappel : 'La prière fervente du juste a une grande efficacité.' (Jacques 5:16)"
  },

  // ===== PRIÈRES SPÉCIFIQUES D'APPRENTISSAGE (TOUT ÂGE) =====
  {
    keywords: ["priere apprendre bible", "comprendre bible", "intelligence spirituelle", "revelation"],
    answer: "PRIÈRE POUR COMPRENDRE LA BIBLE :\n'Esprit de vérité, Jésus a dit que tu nous enseignerais toutes choses et te rappelleriez tout ce qu'il a dit (Jean 14:26). Ouvre mon intelligence quand je lis ta Parole. Ne laisse pas ce texte être seulement des lettres, mais fais-le devenir vivant dans mon cœur. Révèle-moi les mystères de ton royaume. Au nom de Jésus.'\n\nConseil : Lisez avec un carnet de notes pour écrire ce que Dieu vous montre."
  },
  {
    keywords: ["priere pardonner quelqu'un", "rancune", "amer", "offense grave"],
    answer: "PRIÈRE POUR PARDONNER (Très difficile mais vital) :\n'Seigneur, j'ai été gravement blessé(e) par [nom de la personne]. Ma chair veut me venger ou rester dans la rancune. Mais tu m'as commandé de pardonner 70 fois 7 fois. Je choisis, par un acte de ma volonté, de lâcher cette offense. Je ne veux plus être prisonnier(ère) de ce passé. Guéris ma blessure intérieure et remplis mon cœur de ton amour surnaturel pour cette personne. Au nom de Jésus.'\n\nAvertissement : 'Si vous ne pardonnez pas les uns aux autres, votre Père ne vous pardonnera pas non plus vos offenses.' (Matthieu 6:15)"
  },
  {
    keywords: ["priere depression", "tristesse profonde", "angoisse mort", "desespoir"],
    answer: "PRIÈRE QUAND L'ÂME EST DANS L'ABATTEMENT :\n'Éternel, mon âme est abattue au dedans de moi (Psaume 42:7). Les ténèbres m'entourent et je ne vois pas d'issue. Mais tu es la lumière du monde. Je crie vers toi, écoute-moi ! Envoie ta Parole pour me relever. Le sacrifice qui te plaît, c'est un esprit brisé (Psaume 51:19), voici le mien. Restaure la joie de mon salut. Au nom de Jésus.'\n\nNote pastorale : La dépression est aussi une maladie chimique. Priez, mais n'hésitez pas à consulter un professionnel de la santé mentale chrétien. Dieu utilise les médecins."
  },
  {
    keywords: ["priere decision importante", "choix vie", "orientation", "mariage choix", "deménagement"],
    answer: "PRIÈRE POUR PRENDRE UNE DÉCISION :\n'Seigneur, je suis à une croisée de chemins. Je ne veux pas me fier à ma propre intelligence (Proverbes 3:5-6). Reconnais mes voies, je t'en supplie. Ouvre la bonne porte et ferme les mauvaises. Si ce n'est pas ta volonté, empêche-moi d'avancer. Fais que ta paix règne dans mon cœur comme un arbitre (Colossiens 3:15) pour me confirmer ta direction. Au nom de Jésus.'"
  },

  // ===== CONCLUSION ET ACCUEIL =====
  {
    keywords: ["devenir chretien", "comment sauver", "accepter jesus", "naissance nouvelle"],
    answer: "Pour devenir chrétien (né de nouveau):\n\n\n1. RECONNAISSEZ que vous êtes pécheur: 'Tous ont péché.' (Romains 3:23)\n2. CROYEZ que Jésus est mort pour vos péchés et est ressuscité: 'Christ est mort pour nos péchés.' (1 Corinthiens 15:3)\n3. CONFESSEZ Jésus comme Seigneur et Sauveur: 'Si tu confesses de ta bouche le Seigneur Jésus... tu seras sauvé.' (Romains 10:9)\n4. RECEVEZ le don du salut par la foi: 'Car c'est par la grâce que vous êtes sauvés.' (Éphésiens 2:8)\n\nVous pouvez prier: 'Seigneur Jésus, je reconnais que je suis pécheur. Je crois que tu es mort pour mes péchés et que tu es ressuscité. Je te reçois comme mon Seigneur et Sauveur. Merci de me sauver. Amen.'\n\nSi vous avez pris cette décision, contactez-nous au +243 970096597 ou cbcamulongwe@gmail.com pour un accompagnement !"
  },
// ];



// UFUNGUO WA MAARIFA YA MSAIDIZI (ASSISTANT)
// const knowledgeBase = [
  // ===== SALAMU =====
  {
    keywords: ["jambo", "habari", "salama", "mchana", "hello", "mambo"],
    answer: "Habari njema 🙏 Karibu kwenye 3e CBCA Mulongwe. Niko hapa kukusaidia kuzama zaidi katika imani yako na kujua Neno la Mungu. Ninaweza kukusaidia aje leo?"
  },

  {
    keywords: ["asante", "shukrani"],
    answer: "Kwa furaha 🙏 Neema ya Bwana Yesu Kristo, upendo wa Mungu na ushiriki wa Roho Mtakatifu viwe nawe! (2 Wakorintho 13:13)"
  },

  // ===== UTAMBULISHO WA KANISA =====
  {
    keywords: ["kanisa", "cbca", "nani yenu", "utangulizi"],
    answer: "CBCA Mulongwe ya 3 ni jumuiya ya Kikristo iliyoko DRC, inayohusika na kukubali Injili, kusali na kuhudumia jamii. Kama mtume Paulo alisema: 'Ninyi ni mwili wa Kristo, na ninyi ni viungo vyake, kila mmoja kwa sebu yake.' (1 Wakorintho 12:27)"
  },

  {
    keywords: ["dhamira", "dira"],
    answer: "Dhamira yetu ni kueneza Injili, kufunza wanafunzi na kuhudumia jamii kwa upendo na imani, kulingana na agizo la Yesu: 'Nendeni, wafanyeni wanafunzi watu wa mataifa yote, kuwabatiza kwa jina la Baba, na la Mwana, na la Roho Mtakatifu.' (Mathayo 28:19)"
  },

  // ===== MAHALI PAPO =====
  {
    keywords: ["anwani", "mahali", "wapi", "palepo", "kupata"],
    answer: "Tuko Mulongwe, Avenue du 30 juin, Kitongoji ROMBE1. Kama ilivyoandikwa: 'Kwa maana mahali pambwapo wawili au watatu wamekusanyika kwa jina langu, niko katikati yao.' (Mathayo 18:20)"
  },

  // === MAWASILIANO ===
  {
    keywords: ["wasiliani", "nambari", "simu", "piga"],
    answer: "Unaweza kutupigia simu kwa +243 970096597 au kupitia ukurasa wetu wa mawasiliano. Usikose kutupigia simu kwa swali lolote la kiroho au la kiutendaji."
  },

  {
    keywords: ["barua pepe", "email"],
    answer: "Anwani yetu ya barua pepe ni: cbcamulongwe@gmail.com. Tutafurahi kujibu maswali yako."
  },

  // ===== IBADA =====
  {
    keywords: ["ibada jumapili", "ibada", "jumapili"],
    answer: "Ibada kuu inafanyika kila Jumapili kutoka saa 8:00 hadi 11:30. 'Kwa maana mahali pambwapo wawili au watatu wamekusanyika kwa jina langu, niko katikati yao.' (Mathayo 18:20)"
  },

  {
    keywords: ["asubuhi", "ibada asubuhi", "sali asubuhi"],
    answer: "Ibada za asubuhi hufanyika kutoka Jumatatu hadi Jumamosi kutoka saa 5:30 hadi 6:10. 'Asubuhi, fanya uonekane wema wako, kwa maana nimekuimini.' (Zaburi 143:8)"
  },

  {
    keywords: ["jumamosi ibada"],
    answer: "Kila Jumamosi, tunatembelea wanachama wa kanisa kutoka saa 6:00 hadi 7:00, kufuata mfano wa Wakristo wa kwanza walio 'kukusanyika kila siku hekaluni, nao walivunja mkate nyumbani.' (Matendo 2:46)"
  },

  // ===== SALA =====
  {
    keywords: ["sala", "kuomba", "kuombea"],
    answer: "Kikao cha sala hufanyika kila Ijumaa saa 4:00 asubuhi. 'Ombeni sikuzote.' (1 Wathesalonike 5:17)"
  },

  // ===== SHULE YA JUMAPILI =====
  {
    keywords: ["shule jumapili", "watoto", "vijana", "kijana"],
    answer: "Shule ya Jumapili inaanza saa 7:00 kwa watoto, vijana na vijana wazima. 'Mfunze mtoto katika njia azipasayo kwenda; na atakapokuwa mzee, hatajitenga nayo.' (Mithali 22:6)"
  },

  // ===== MAKUNDI =====
  {
    keywords: ["kundi", "nyumba", "kujifunza biblia"],
    answer: "Makundi ya nyumba hukutana kila Alhamisi saa 6:30 mchana kwa kujifunza Biblia. 'Wakaidhi katika mafundisho ya mitume, katika ushiriki wa kaka, katika kuvunja mkate, na katika maombi.' (Matendo 2:42)"
  },

  // ===== KOROSHO =====
  {
    keywords: ["korosho", "muziki", "sifa"],
    answer: "Korosho zetu ni: Umoja, Mwamga mkuu, Women na Wokovu. Mazoezi Jumapili saa 12:30 mchana na Jumamosi saa 3:00 alasiri. 'Mwimbieni Bwana wimbo mpya! Mwimbieni Bwana, ninyi nyote, wenyeji wa nchi!' (Zaburi 96:1)"
  },

  // ===== WATOTO =====
  {
    keywords: ["watoto", "utumishi watoto"],
    answer: "Utumishi wa watoto unatoa shughuli za kiroho na za elimu kila Jumapili asubuhi. 'Waachieni watoto wadogo waje kwangu, wawaachie; kwa maana ufalme wa Mungu ni wa wanaofanana nao.' (Marko 10:14)"
  },

  // ===== MATUKIO =====
  {
    keywords: ["mkutano", "uamsho", "tukio", "mpango"],
    answer: "Tunandaa mara kwa mara mikutano, makampeni, siku za kiroho na shughuli za jamii. 'Kwa maana mahali pambwapo wawili au watatu wamekusanyika kwa jina langu, niko katikati yao.' (Mathayo 18:20)"
  },

  {
    keywords: ["kampeni vijana", "vijana"],
    answer: "Kampeni ya vijana 'Kizazi cha Athari' itafanyika kutoka tarehe 10 hadi 13 Julai 2026. 'Kijana, ninakuandikia, kwa sababu wewe ni mwenye nguvu, na Neno la Mungu linakaa ndani yako.' (1 Yohane 2:14)"
  },

  {
    keywords: ["mwanamke", "siku ya mwanamke"],
    answer: "Siku ya mwanamke Mkristo imetarajiwa tarehe 31 Mei 2026 kwa mafundisho na maombi. 'Mwanamke mwema hujenga nyumba yake, na mwanamke mpumbavu anaiangamiza kwa mikono yake mwenyewe.' (Mithali 14:1)"
  },

  // ===== GALERI =====
  {
    keywords: ["picha", "galeri", "picha"],
    answer: "Unaweza kuangalia galeri yetu kuona dakika za ibada, matukio na shughuli za kanisa. 'Tujivunie hata katika dhiki, tukijua ya kuwa dhiki inazalisha uvumilivu.' (Waroma 5:3)"
  },

  // ===== MSAADA WA JUMUIYA =====
  {
    keywords: ["msaada", "help", "musahada"],
    answer: "Ninaweza kukusaidia na: ratiba za ibada, mawasiliano, mahali, matukio, korosho, shughuli, pia na kujifunza Biblia, aya kulingana na mada, maelezo ya sehemu za Biblia, na mipango ya kusoma. Unataka kuchunguza nini?"
  },

  // ===== SEHEMU MPYA: KUJIFUNZA BIBLIA =====
  
  // --- Vitabu vya Biblia ---
  {
    keywords: ["mwanzo", "genesis", "kitabu cha kwanza"],
    answer: "Mwanzo ni kitabu cha kwanza cha Biblia, kilichoandikwa na Musa. Kinaeleza kuumbwa wa dunia, kuanguka kwa mwanadamu, mafuriko, na historia ya mababu kama Ibrahimu, Isaka na Yakobo. Mada kuu: Mungu ndiye Muumbaji na Mkuu wa ulimwengu anayeanzisha uhusiano na wanadamu. 'Mwanzoni Mungu aliumba mbingu na nchi.' (Mwanzo 1:1)"
  },
  
  {
    keywords: ["kutoka", "toka misri"],
    answer: "Kutoka kinaeleza kuokoka wa Waisraeli kutoka utumwa nchini Misri chini ya uongozi wa Musa, na kupokea sheria kwenye mlima Sinai. Mada kuu: Mungu ndiye Mwokaji anayefanya agano na watu wake. 'Mimi ndiye Bwana, Mungu wako, niliyekutokea nchi ya Misri, kutoka nyumba ya utumwa.' (Kutoka 20:2)"
  },
  
  {
    keywords: ["zaburi", "nyimbo", "sifa"],
    answer: "Kitabu cha Zaburi ni mkusanyiko wa mashairi 150 na nyimbo zinazotumika kwa sifa, sala na kutafakari. Mengi yaliandikwa na mfalme Daudi. Zinaonyesha hisia zote za kibinadamu katika uhusiano na Mungu. 'Msifuni Bwana, kwa maana ni mwema, kwa maana rehema yake inadumu milele!' (Zaburi 136:1)"
  },
  
  {
    keywords: ["injili", "mathayo", "marko", "luka", "yohane"],
    answer: "Injili nne (Mathayo, Marko, Luka na Yohane) zinaeleza maisha, utumishi, kifo na ufufuko wa Yesu Kristo. Mathayo anawasilisha Yesu kama Mfalme wa Wayahudi, Marko kama Mtumishi, Luka kama Mwana wa mtu, na Yohane kama Mwana wa Mungu. 'Kwa maana Mungu aliupenda ulimwengu hivi, hata akamtoa Mwana wake pekee, ili kila amchaye mwewe asipotee, bali awe na uzima wa milele.' (Yohane 3:16)"
  },
  
  {
    keywords: ["matendo ya mitume", "matendo", "kanisa la kwanza"],
    answer: "Matendo ya Mitume, yaliyoandikwa na Luka, yanaeleza ukuaji wa kanisa la kwanza baada ya Yesu kupaa, chini ya uongozi wa Roho Mtakatifu. Yanaweka wazi zaidi utumishi wa Petro na Paulo. 'Lakini mtapokea nguvu, Roho Mtakatifu akijia juu yenu, na mtakuwa mashahidi wangu hata Yerusalemu, na katika Yuda yote, na Samaria, na hata mwisho wa dunia.' (Matendo 1:8)"
  },
  
  {
    keywords: ["waroma", "barua kwa waroma"],
    answer: "Barua kwa Waroma, iliyoandikwa na mtume Paulo, ni mojawapo ya wasilisho zaidi kamili za teolojia ya Kikristo. Inaeleza uhakika kwa imani, neema ya Mungu, na maisha katika Roho. 'Kwa maana kwa neema mmeokoka, kwa njia ya imani; na hilo si kutoka kwenu, ni zawadi ya Mungu.' (Waefeso 2:8 - mada sawa)"
  },
  
  {
    keywords: ["ufunuo", "funuo", "mwisho wa nyakati"],
    answer: "Ufunuo, uliandikwa na mtume Yohane, ni kitabu cha kinabii kinachofunua ushindi wa mwisho wa Kristo juu ya uovu na kuanzisha mbingu mpya na nchi mpya. 'Mimi ndiye Alfa na Omega, wa kwanza na wa mwisho, mwanzo na mwisho.' (Ufunuo 22:13)"
  },

  // --- Wahusika wa Biblia ---
  {
    keywords: ["ibrahimu", "baba wa waumini"],
    answer: "Ibrahimu anazingatiwa kuwa baba wa imani. Mungu alimwita kuacha nchi yake kwenda nchi aliyoahidi, na akamahidi mzao mwingi licha ya uzee wake. 'Naye Ibrahimu akamwamini Bwana, nayo ikahesabiwa kwake kuwa haki.' (Mwanzo 15:6)"
  },
  
  {
    keywords: ["musa", "mwokaji"],
    answer: "Musa alichaguliwa na Mungu kuwaokoa Waisraeli kutoka utumwa nchini Misri na kupokea sheria kwenye mlima Sinai. Aliwongoza watu kwa miaka 40 jangwani. 'Sasa nenda, nitakutuma kwa Farao, na utatoa Watu wangu, Wana wa Israili, kutoka Misri.' (Kutoka 3:10)"
  },
  
  {
    keywords: ["daudi", "mfalme daudi", "mtunzi zaburi"],
    answer: "Daudi alikuwa mchungaji aliyekuwa mfalme wa Israili, aliyeelezewa kama mwanamume kwa moyo wa Mungu. Aliandika Zaburi nyingi na kuanzisha Yerusalemu kuwa mji mkuu. 'Nimepata Daudi, mwana wa Isai, mwanamume kwa moyo wangu, atakayefanya mapenzi yangu yote.' (Matendo 13:22)"
  },
  
  {
    keywords: ["yesu", "kristo", "bwana", "mwana wa mungu"],
    answer: "Yesu Kristo ndiye kitovu cha imani ya Kikristo, Mwana wa Mungu aliyekuwa mtu kuokoa wanadamu kutoka dhambi. Aliwafundisha upendo, alifanya miujiza, akafariki msalabani na kufufuka. 'Yesu akamwambia, Mimi ndiye njia, na kweli, na uzima; mtu hafi kwenda kwa Baba ila kwa njia yangu.' (Yohane 14:6)"
  },
  
  {
    keywords: ["paulo", "mtume paulo", "saulo"],
    answer: "Mtume Paulo, awali akiwa mwindaji wa Wakristo kwa jina la Saulo, alimkuta Yesu njiani kwenda Dameski na akawa mshemwenyi mkubwa zaidi wa Ukristo wa mwanzo, akiandika barua nyingi. 'Kwa maana najua niliyemwamini, nami nime hakikisha kwamba yeye ana uweza wa kulinza nililompa hadi siku ile.' (2 Timotheo 1:12)"
  },
  
  {
    keywords: ["mariamu", "mariamu mtakatifu", "mama yesu"],
    answer: "Mariamu, mama wa Yesu, alichaguliwa na Mungu kumbeba Mwana wa Mungu tumboni mwake. Alijibu kwa imani kwa tangazo la malaika Gabrieli. 'Tazama, mja wa Bwana; na ifanywe kwangu kama ulivyonena.' (Luka 1:38)"
  },
  
  {
    keywords: ["petro", "mtume petro", "simoni petro"],
    answer: "Simoni Petro alikuwa mwavuji aliyekuwa mojawapo ya mitume kumi na wawili wa Yesu. Alitangaza kuwa Yesu ndiye Kristo, akaenda juu ya maji, lakini pia akamkana Yesu mara tatu kabla ya kutubu. 'Wewe ndiwe Kristo, Mwana wa Mungu aliye hai.' (Mathayo 16:16)"
  },

  // --- Mada za Biblia ---
  {
    keywords: ["upendo", "kupenda"],
    answer: "Upendo uko katikati ya ujumbe wa Biblia. Mungu ni upendo, na ametuonyesha upendo huu kwa kutuma Yesu. Tumewaitwa kupenda Mungu na jirani zetu. 'Mungu ni upendo; na ambae anakaa katika upendo anakaa katika Mungu, na Mungu anakaa ndani yake.' (1 Yohane 4:16) 'Mpendaneni wenyewe kama ninyi mwenyewe nilivyowapenda.' (Yohane 13:34)"
  },
  
  {
    keywords: ["neema", "fadhili ya mungu"],
    answer: "Neema ni fadhili isiyostahili ya Mungu kwa wakosefu. Wokovu hauwezi kupatikana kwa kazi bali kwa neema ya Mungu inayopokewa kwa imani. 'Kwa maana kwa neema mmeokoka, kwa njia ya imani; na hilo si kutoka kwenu, ni zawadi ya Mungu.' (Waefeso 2:8)"
  },
  
  {
    keywords: ["imani", "kuamini", "kuamini"],
    answer: "Imani ni kuamini kwa Mungu na ahadi zake, hata bila kuona. Ni muhimu kwa wokovu na maisha ya Kikristo. 'Imani ni hakika ya mambo yanayotarajiwa, uthibitisho wa mambo hayajaonekana.' (Waebrania 11:1) 'Bila ya imani siwezi kupendeza.' (Waebrania 11:6)"
  },
  
  {
    keywords: ["msamaha", "kumsamehe", "tubu"],
    answer: "Msamaha ni mada kuu ya Biblia. Mungu anasamehe dhambi zetu tunapotubu, na tumewaitwa kumsamehe wengine. 'Tukitubu dhambi zetu, yeye ni mwaminifu na mwenye haki ili atusamehe dhambi zetu, na kutuosha udhibifu wote.' (1 Yohane 1:9) 'atusamehe madeni yetu, kama nasi tunawasamehe wadeni wetu.' (Mathayo 6:12)"
  },
  
  {
    keywords: ["wokovu", "kuokoa", "kuokoka"],
    answer: "Wokovu ni kuokoka kutoka dhambi na matokeo yake, yaliyofanywa na kifo na ufufuko wa Yesu Kristo. Unapokewa kwa imani. 'Kwa maana hapana chini ya mbingu jingine lolote linalotolewa kwa watu, ambalo tunapaswa kuokoka.' (Matendo 4:12)"
  },
  
  {
    keywords: ["roho mtakatifu", "roho takatifu", "mfaraji"],
    answer: "Roho Mtakatifu ni nafsi ya tatu ya Utatu. Anahukumu kwa dhambi, anazalia upya, anakaa katika waumini, anawaongoza na kuwapa zawadi kwa utumishi. 'Lakini Mfaraji, Roho Mtakatifu, ambaye Baba atamtuma kwa jina langu, yeye atawafundisha yote, na kuwakumbusha yote niliyowasema.' (Yohane 14:26)"
  },
  
  {
    keywords: ["utatu", "trinité", "baba mwana roho mtakatifu"],
    answer: "Utatu ni doktrina ya Kikristo inayosema Mungu ni mmoja katika nafsi tatu: Baba, Mwana na Roho Mtakatifu. Dhana hii haielezei wazi katika Biblia bali inatokana na sehemu zinazofunua umungu wa kila nafsi. 'Basi nendeni, mkafanye wanafunzi watu wa mataifa yote, kuwabatiza kwa jina la Baba, na la Mwana, na la Roho Mtakatifu.' (Mathayo 28:19)"
  },
  
  {
    keywords: ["sala", "kuomba", "ushiriki na mungu"],
    answer: "Sala ni mawasiliano na Mungu, ikijumuisha sifa, kutubu, shukrani na maombi. Yesu alitoa mfano wa Baba Yetu. 'Ombeni sikuzote.' (1 Wathesalonike 5:17) 'Msijali neno lolote; bali katika kila kitu kwa maombi na maombezi, pamoja na shukrani, fanya maombi yenu yajulikane mbele za Mungu.' (Wafilipi 4:6)"
  },
  
  {
    keywords: ["kumi", "kumi ya mapato", "kumi ya dola"],
    answer: "Kumi ni kanuni ya kutoa kumi ya mapato yako kwa Mungu. Ingawa ina asili yake katika Agano la Kale, wakristo wengi wanazipraktika kama kitendo cha imani na kutambua ukuu wa Mungu. 'Leteni kumi zote zote nyumbani kwa hazina... Nijaribuni, asema Bwana wa majeshi. Na muone kama si nitafungua madirisha ya mbingu kwenu.' (Malaki 3:10)"
  },
  
  {
    keywords: ["ubatizo", "kubatiza", "kuzamisha"],
    answer: "Ubatizo ni ishara ya nje ya mabadiliko ya ndani. Inawakilisha kifo, kuzikwa na ufufuko pamoja na Kristo. Ni kitendo cha kutii na ushahidi wa umma. 'Aamchaye na akaombatizwa ataokoka.' (Marko 16:16) 'Basi tumezikwa pamoja naye kwa ubatizo katika kifo chake.' (Waroma 6:4)"
  },
  
  {
    keywords: ["utakatifu", "mtakatifu", "utakaso"],
    answer: "Utakatifu ni kutengwa na dhambi na kujitolea kwa Mungu. Waumini wamewaitwa kuwa watakatifu kama Mungu ni mtakatifu. Ni mchakato unaopita unaoitwa utakaso. 'Kama watoto wa kutii, msifanane na tamaa zile mli kuwa nazo zamani, mkiwa katika ujinga. Bali kama yeye aliyewaita ni mtakatifu, nanyi mwewe kuwa watakatifu katika tabia yenu yote.' (1 Petro 1:14-15)"
  },
  
  {
    keywords: ["tumaini", "matumaini", "mustakabali"],
    answer: "Tumaini la Kikristo si ombi la kawaida, bali hakika iliyoko juu ya ahadi za Mungu, hasa ufufuko na uzima wa milele. 'Tunaokoka kwa tumaini. Lakini tumaini linaloonekana si tumaini tena: kitu kinachoonekana, je, kinaweza kutarajiwa?' (Waroma 8:24) 'Yesu Kristo ndiye tumaini letu.' (1 Timotheo 1:1)"
  },

  // --- Aya kulingana na hali za maisha ---
  {
    keywords: ["woga", "huzuni", "wasiwasi", "mashaka"],
    answer: "Biblia inatoa faraja nyingi dhidi ya woga: 'Usiogope chochote, kwa maana mimi ni nawe; usiwe na macho ya wasiwasi, kwa maana mimi ni Mungu wako; mnanif strengthened, mimi niko kwako kusaidia, mnikubali kwa mkono wangu wa kulia ushindi.' (Isaya 41:10) 'Amani nawaachieni, nawaapaye amani yangu; siwapeni kama dunia inavyoipa. Mioyo yenu isije ikasikitika.' (Yohane 14:27)"
  },
  
  {
    keywords: ["huzuni", "maombolezo", "maumivu", "mateso"],
    answer: "Mungu yu karibu na wanaoteseka: 'Bwana yu karibu na waliobabaika moyo, na huokoa waliokuwa na roho zilizoshuka.' (Zaburi 34:19) 'Yeye atafuta machozi yote ya machozi yao, na kifo hakitakuwa tena, wala ha kutakuwa na maombolezo, wala kilio, wala maumivu.' (Ufunuo 21:4)"
  },
  
  {
    keywords: ["ugonjwa", "afya", "uponyaji", "mgonjwa"],
    answer: "Biblia inaonyesha Mungu anaweza kuponya, lakini pia kuwa mateso yanaweza kuwa na maana ya kiroho: 'Mwana wangu, usidharau nyongo ya Bwana, wala usiogope kwa adhabu zake; kwa maana Bwana anamwambia ampigaye anampenda.' (Mithali 3:11-12) 'Mtu yeyote miongoni mwenu yu mgonjwa? Aamkie wazee wa kanisa, na wazee waombee kwa ajili yake, akimwasha mafuta kwa jina la Bwana.' (Yakobo 5:14)"
  },
  
  {
    keywords: ["pesa", "kifedha", "umaskini", "utajiri"],
    answer: "Biblia inafundisha mtazamo sahihi kwa pesa: 'Upendo wa pesa ni mzizi wa maovu yote.' (1 Timotheo 6:10) 'Tafuteni kwanza ufalme wa Mungu na haki yake, na hayo yote yataongezeweni.' (Mathayo 6:33) 'Toeni, na itawapewa.' (Luka 6:38)"
  },
  
  {
    keywords: ["mgogoro", "kizozo", "urekebishano", "kumsamehe"],
    answer: "Biblia inatoa misingi ya kutatua migogoro: 'Kama ndugu yako akidhambi, nenda kumkemea wewe na yeye peke yake. Akisikiliza, umemshinda ndugu yako.' (Mathayo 18:15) 'Jua lisichwe juu ya hasira zenu.' (Waefeso 4:26) 'Vumiliani wenyewe, na msameheni wakubaliane, ikiwa mtu ana yo mbele ya mwingine; kama Kristo naye alivywamsamehe nanyi vivyo hivyo fanyeni.' (Wakolosai 3:13)"
  },
  
  {
    keywords: ["jaribu", "dhambi", "kuanguka", "kosa"],
    answer: "Mbele ya jaribu, Biblia inatoa ahadi na ushauri: 'Jaribu lolote linalowakabili halijakuwa la kibinadamu; lakini Mungu ni mwaminifu, asiwacha mjaribiwe juu ya uwezo wenu; bali pamoja na jaribu atatayarisha njia ya kutoka, ili mpweze kustahimili.' (1 Wakorintho 10:13) 'Basi mjiwe Mungu, na mkatae Shetani, naye atakimbieni.' (Yakobo 4:7)"
  },
  
  {
    keywords: ["kifo", "kufariki", "kufa", "makaburi"],
    answer: "Biblia inatoa mtazamo wa kipekee kuhusu kifo: 'Yesu akamwambia, Mimi ndiye ufufuko na uzima. Aamchaye mimi, ataishi, hata akifa.' (Yohane 11:25) 'Kwa maana mshahara wa dhambi ni kifo; bali zawadi ya bure ya Mungu ni uzima wa milele katika Kristo Yesu Bwana wetu.' (Waroma 6:23) 'Kwa hakika sisi sote ni kama ishirini, sote ni kama kivuli.' (1 Mambo ya Nyakati 29:15)"
  },
  
  {
    keywords: ["kukata tamaa", "uchovu", "kuleta", "kuacha"],
    answer: "Mungu anaimarisha wanaokata tamaa: 'Lakini wanaomtumaini Bwana wataupata nguvu upya. Wataenda juu kama tai; watakwenda, watachoka; wataenda, hawatachoka.' (Isaya 40:31) 'Nijieni ninyi wote mlio na dhiki na mizigo, nami nitawapa mapumziko.' (Mathayo 11:28)"
  },
  
  {
    keywords: ["familia", "ndoa", "mtoto", "wazazi"],
    answer: "Biblia inatoa misingi kwa familia: 'Ndoa iathiriwe na kila mtu, na kitanda cha ndoa kiwe safi.' (Waebrania 13:4) 'Watoto, tiini wazazi wenu katika Bwana, kwa maana hilo ni la haki. Baba, msichochee watoto wenu, bali wailete katika adabu na mafundisho ya Bwana.' (Waefeso 6:1,4)"
  },
  
  {
    keywords: ["kazi", "kazi", "taaluma", "kazi"],
    answer: "Biblia inathibitisha kazi ya haki: 'Aye mbaya na asiba tena; bali a achane kwa kazi, akifanya kwa mikono yake kilichofaa, ili awe na kitu kumtolea aliye mwenye hitaji.' (Waefeso 4:28) 'Kilo chochote mnachofanya, fanyeni kwa moyo mwema, kama kwa Bwana wala si kwa watu.' (Wakolosai 3:23)"
  },

  // --- Mipango ya kusoma Biblia ---
  {
    keywords: ["mpango wa kusoma", "kusoma biblia", "jinsi ya kusoma biblia"],
    answer: "Hapa kuna mipango ya kusoma Biblia inayopendekezwa:\n\n1. Mpango wa kuanzia (miezi 6): Sura moja kwa siku, uanzie na Yohane, kisha Mwanzo, Zaburi, Mithali, na Waroma.\n\n2. Mpango wa kihistoria (mwaka 1): Soma Biblia kwa mpangilio wa kihistoria wa matukio.\n\n3. Mpango wa kimaada (mwaka 1): Kila mwezi unachunguza mada tofauti (upendo, sala, imani, n.k.).\n\n4. Mpango wa Agano Jipya (miezi 3): Lenga kwenye Agano Jipya.\n\n'Neno lako ni taa miguuni pangu, na mwanga kwenye njia yangu.' (Zaburi 119:105)"
  },
  
  {
    keywords: ["tafakari", "kutafakari", "kutafakari biblia"],
    answer: "Kutafakari Biblia kunamaanisha kufikiria kwa kina kuhusu sehemu iliyoichukua maana yake na kuitumia katika maisha yako: 'Ninatafakari juu ya kazi zako zote, ninafikiri juu ya matendo yako makubwa.' (Zaburi 77:12) Njia inayopendekezwa: Soma kifungu cha fupi mara 3, andika kilicho kuvutia macho yako, uliza maswali kuhusu maandishi, fikiria jinsi ya kuitumia, na omba kulingana na ulichojifunza."
  },

  // --- Historia ya Biblia ---
  {
    keywords: ["kuumbwa", "adamu", "eva", "peponi"],
    answer: "Kuumbwa ni mwanzo wa historia ya Biblia: Mungu aliumba dunia kwa siku sita na kufanya mwanamume na mwanamke kwa sura yake. Walikuwa wakiishi katika ushiriki kamili na Mungu katika bustani ya Edeni, lakini walimasi Mungu kwa kula tunda lililokatazwa, wakileta dhambi katika dunia. 'Mungu aliumba mtu kwa sura yake, kwa sura ya Mungu alimuumba; mwanamume na mwanamke aliwaumba.' (Mwanzo 1:27)"
  },
  
  {
    keywords: ["mafuriko", "noa", "sanduku", "mafuriko"],
    answer: "Mafuriko ni tukio ambapo Mungu alituma mafuriko makubwa juu ya dunia kuadhibu ubaya wa wanadamu, lakini akamwokoa Noa na familia yake ndani ya sanduku. Baada ya mafuriko, Mungu alifanya agano na Noa, ahadi ya kutoharibu dunia tena kwa mafuriko. 'Nitaweka upinde wangu katika mawingu, na utakuwa ni ishara ya agano kati yangu na nchi.' (Mwanzo 9:13)"
  },
  
  {
    keywords: ["kutoka", "toka misri", "kupita bahari nyekundu"],
    answer: "Kutoka ni kuokoka kwaje wa Waisraeli kutoka utumwa nchini Misri chini ya uongozi wa Musa. Mungu alituma tauni kumi nchini Misri, kisha akafungua Bahari Nyekundu ili watu wapite kavu, wakati jeshi la Misri lilitwaa. 'Bwana alipigana kwa ajili ya Israili.' (Kutoka 14:25)"
  },
  
  {
    keywords: ["amri kumi", "decalogue", "amri"],
    answer: "Amri kumi zilitolewa na Mungu kwa Musa kwenye mlima Sinai baada ya kutoka Misri. Zinajumuisha: hapana miungu mingine, hapana sanamu, usitumie jina la Mungu bure, kuobserve Sabato, kuhsahidi wazazi, usiuwe, usifanye uzinzi, usiibe, usishuhudie uwongo, na usitamani. 'Andika maneno haya; kwa maana kulingana na maneno haya nafanya agano na wewe na na Israili.' (Kutoka 34:27)"
  },
  
  {
    keywords: ["ahadi ya nchi", "nchi aliyoahidi", "kanaani", "yordani"],
    answer: "Nchi aliyoahidi ilikuwa nchi ya Kanaani ambayo Mungu aliiahidi Ibrahimu na mzao wake. Baada ya miaka 40 jangwani, Waisraeli walivuka Yordani chini ya uongozi wa Yoshua kuteka nchi hiyo. 'Kila mahali ambapo mguu wako utafanyia hatua, nakupea, kama nilivyoambia Musa.' (Yoshua 1:3)"
  },
  
  {
    keywords: ["hekalu", "sulaymani", "yerusalemu"],
    answer: "Hekalu la Yerusalemu lilijengwa na mfalme Sulaymani kama mahali pa kudumu kwa kuabudu Mungu na kuhifadhi sanduku la agano. Lilichukua nafasi ya hema iliyotumika jangwani. 'Utu wa Bwana ulijaza nyumba.' (1 Mambo ya Wafalme 8:11)"
  },
  
  {
    keywords: ["uhamisho", "babuloni", "mateka", "kuhamishiwa"],
    answer: "Uhamisho wa Babuloni ulitokea wakati ufalme wa Yuda ulitwaliwa na Babuloni, na Wayahudi wengi walihamishwa. Kipindi hiki kilidumu takriban miaka 70, kama Yeremia alivyotabiri. Baada ya uhamisho, wengine walirudi Yerusalemu kujenga hekalu tena. 'Nchi yote hii itakuwa jangwa, mahali pa uharibifu, na mataifa haya yatakuwa chini ya mfalme wa Babuloni kwa miaka sabini.' (Yeremia 25:11)"
  },
  
  {
    keywords: ["kuzaliwa yesu", "krismasi", "bethlehem", "vichaka"],
    answer: "Kuzaliwa kwa Yesu kulitokea Bethlehemu, kama ilivyotabiriwa. Mariamu na Yusufu walikuwa wameenda huko kwa sensa. Yesu alizaliwa kwenye fumbo la ng'ombe kwa sababu hakuna mahali palipokuwa na nafasi katika mapumziko, na wachungaji walioletwa na malaika wakamtembelea. 'Na wewe, Bethlehemu, nchi ya Yuda, wewe si mdogo kabisa miongoni mwa viongozi vya Yuda; kwa maana kutoka kwako atatoka mtu atakaye kuwa mkuu wa Israili, watu wangu.' (Mathayo 2:6)"
  },
  
  {
    keywords: ["ufufuko", "kaburi tupu", "paskali", "siku ya tatu"],
    answer: "Ufufuko wa Yesu ni tukio kuu la imani ya Kikristo. Siku tatu baada ya kusulubiwa kwake, kaburi lilipatikana tupu na wanawake, na Yesu alionekana kwa wanafunzi wake mara nyingi kabla ya kupaa. 'Hapo si; amefufuka, kama alivyoambia.' (Mathayo 28:6) 'Ikiwa Kristo hakufufuka, imani yenu ni batili.' (1 Wakorintho 15:17)"
  },
  
  {
    keywords: ["pentekoste", "roho mtakatifu ashukie", "ndimi"],
    answer: "Pentekoste ilitokea sini thelathini baada ya Paskali, wakati Roho Mtakatifu alishuka kwa wanafunzi walioikusanywa Yerusalemu, kama Yesu alivyoahidi. Walianza kuongea kwa lugha nyingine, na takriban watu 3,000 walitubu siku hiyo, kuashiria kuzaliwa kwa Kanisa. 'Wakajazwa wote kwa Roho Mtakatifu, wakaanza kuongea kwa lugha nyingine, kama Roho alivyowapa kuongea.' (Matendo 2:4)"
  },

  // --- Fumbo za Yesu ---
  {
    keywords: ["fumbo", "mbegu", "mwinu"],
    answer: "Katika fumbo la mwinu, Yesu analinganisha Neno la Mungu na mbegu zilizotupwa katika aina tofauti za udongo: mpaka wa njia (ilichukuliwa na adui), maeneo ya mawe (bila mzizi), miiba (ikizuiwa na shida za dunia), na udongo mzuri (unaotoa matunda). 'Ambaye alipandwa katika udongo mzuri, ndiye amsikilizaye neno, na kuelielewa; huyo hutoa matunda, na anazalisha mara mia, mara sitini, na mara thelathini.' (Mathayo 13:23)"
  },
  
  {
    keywords: ["fumbo", "mwana mpotevu", "mtoto aliyeopotea"],
    answer: "Fumbo la mwana mpotevu linaeleza hadithi ya kijana aliyedai sehemu yake ya urithi, akatwaa kila kitu katika maisha ya fujo, kisha akarudi kwa tuba kwa baba yake ambaye alimkaribisha kwa furaha. Inaonyesha upendo na msamaha wa Mungu. 'Kwa maana mwana wangu huyu alikuwa marehemu, naye amefufuka; alikuwa potevu, naye amepatikana.' (Luka 15:24)"
  },
  
  {
    keywords: ["fumbo", "msamaria mwema", "jirani"],
    answer: "Fumbo la Msamaria Mwema linaeleza jinsi mtu aliyevunjika alivyokataliwa na kuhani na Lawi, lakini akatibiwa na Msamaria (aliyeonekana kama adui wa Wayahudi). Yesu anatumia kufundisha ni nani jirani wetu. 'Nenda, na wewe fanya vivyo hivyo.' (Luka 10:37)"
  },
  
  {
    keywords: ["fumbo", "vipaji", "dhahabu", "watumishi"],
    answer: "Katika fumbo la vipaji, bwana anawapa watumishi wake pesa (vipaji) kabla ya kusafiri. Watumishi wawili wanazidisha pesa zao, lakini wa tatu anazika kwa woga. Kurudi kwake, bwana anawatuzia wa kwanza na kumhukumu wa mwisho. Inafundisha jukumu la kutumia vipaji Mungu alivyotupatia. 'Kwa maana atampaye atapata zaidi, na atakuwa na wingi; lakini asiye na nayo, hata alicho nacho kitachukuliwa kwake.' (Mathayo 25:29)"
  },

  // --- Miujiza ya Yesu ---
  {
    keywords: ["miujiza", "maji kuwa divai", "kana"],
    answer: "Miujiza ya kwanza ya Yesu ilikuwa kubadilisha maji kuwa divai katika arusi Kana, kuonyesha utukufu wake. 'Yesu akabadilisha maji kuwa divai.' (Yohane 2:9) Miujiza hii inaonyesha kuwa Yesu ana mamlaka juu ya asili na anajali mahitaji ya kila siku."
  },
  
  {
    keywords: ["miujiza", "kuenda juu ya maji", "tufani tulizwa"],
    answer: "Yesu alitembea juu ya maji ya ziwa Galilaya wakati wa tufani, akifanya pia tufani ipumue kwa neno lake. 'Ni mimi; msiogope!' (Yohane 6:20) Miujiza hii inaonyesha uweza wake juu ya asili na umungu wake."
  },
  
  {
    keywords: ["miujiza", "mkate", "samaki", "5000", "kulisha umati"],
    answer: "Yesu alilisha watu 5,000 (pamoja na wanawake na watoto) kwa mkate mitano na samaki wawili tu. 'Wakala wote, wakashibishwa.' (Marko 6:42) Miujiza hii inaonyesha upatikanaji wa Mungu na kuashiria Ekaristi."
  },
  
  {
    keywords: ["miujiza", "kipofu", "asiyeona", "kuponya macho"],
    answer: "Yesu aliponya vipofu wengi, mmoja aliyezaliwa kipofu kwa kumwekea matope machoni na kumwambia kuoga katika bwawa la Silo. 'Mimi ndiye mwanga wa dunia.' (Yohane 9:5) Miujiza hii inaonyesha kuwa Yesu analeta mwanga wa kiroho na kimwili."
  },
  
  {
    keywords: ["miujiza", "lazaro", "kufufua marehemu", "kaburi"],
    answer: "Yesu alifufua Lazaro ambaye alikuwa amekufa kwa siku nne, kuonyesha uweza wake juu ya kifo. 'Lazaro, nje!' (Yohane 11:43) Miujiza hii ilisababisha imani ya wengi lakini pia wivu wa waandishi wa dini waliokusudia kumuua Yesu."
  },

  // --- Mafundisho ya Yesu ---
  {
    keywords: ["hotuba mlimani", "heri", "heri"],
    answer: "Hotuba ya mlimani (Mathayo 5-7) ina jumla ya mafundisho ya Yesu, ikijumuisha Heri: 'Heri wanyenyeji wa roho, kwa maana ufalme wa mbingu ni wao! Heri wanaohuzunika, kwa maana watafarijiwa! Heri wanyenye upole, kwa maana watairithi nchi!' (Mathayo 5:3-5) Yesu anafundisha pia Baba Yetu na misingi mingine ya ufalme."
  },
  
  {
    keywords: ["baba yetu", "sala za yesu", "mfano sala"],
    answer: "Baba Yetu ni sala Yesu aliyofundisha wanafunzi wake kama mfano: 'Baba yetu uliye mbinguni! Jina lako litakatwe; ufalme wako uje; mapenzi yako yafanywe duniani kama mbinguni. Tupe leo chakula chetu cha kila siku; utusamehe madeni yetu, kama nasi tunawasamehe wadeni wetu; usitutupe katika jaribu, bali utuokoe na yule mwovu.' (Mathayo 6:9-13)"
  },
  
  {
    keywords: ["amri ya upendo", "amri kubwa"],
    answer: "Yesu alihifadhi sheria yote katika amri mbili: 'Umpende Bwana, Mungu wako, kwa moyo wako wote, na kwa roho yako yote, na kwa akili yako yote. Hii ndiyo amri ya kwanza na kubwa. Na pili ni kama hiyo: Umpende jirani yako kama nafsi yako.' (Mathayo 22:37-39)"
  },
  
  {
    keywords: ["mimi ni", "tamko la yesu"],
    answer: "Katika Injili ya Yohane, Yesu anafanya tamko saba 'Mimi ni': mkate wa uzima (6:35), mwanga wa dunia (8:12), mlango (10:9), mchungaji mwema (10:11), ufufuko na uzima (11:25), njia, kweli na uzima (14:6), na mzabibu wa kweli (15:1). Tamko hizi zinafunua utambulisho wake wa kimungu."
  },

  // --- Masomo ya kina ya kimaada ---
  {
    keywords: ["majina ya mungu", "mungu anayeitwa", "yehova", "elohim", "adonai"],
    answer: "Biblia inafunua Mungu kwa majina tofauti yanayoonyesha sifa zake:\n- Elohim: Mungu Muumbaji, mwenye nguvu zote\n- Yahwe/Yehova: Mungu wa milele, anayeishi kwa nafsi yake\n- Yehova Jire: Bwana atatengeneza\n- Yehova Rapha: Bwana anaponypa\n- Yehova Nissi: Bwana bendera yetu\n- Yehova Shalom: Bwana amani\n- Yehova Raah: Bwana mchungaji wangu\n- Yehova Tsidkenu: Bwana haki yetu\n- Adonai: Bwana, Mkuu\n'Mimi ni niliye.' (Kutoka 3:14)"
  },
  
  {
    keywords: ["matunda ya roho", "tabia ya mkristo", "roho mtakatifu matunda"],
    answer: "Matunda ya Roho ni sifa ambazo Roho Mtakatifu anazalisha katika waumini: 'Lakini tunda la Roho ni upendo, furaha, amani, uvumilivu, wema, wema, uaminifu, upole, kujikana.' (Wagalatia 5:22-23) Matunda huti tofauti na kazi za mwili na ni matokeo ya maisha yanayoongozwa na Roho."
  },
  
  {
    keywords: ["vipaji vya roho", "kiroho", "uwezo"],
    answer: "Vipaji vya kiroho ni uwezo usio wa kawaida unotolewa na Roho Mtakatifu kwa ujenzi wa Kanisa. Vinajumuisha: hekima, ujuzi, imani, uponyaji, miujiza, unabii, kutambua, lugha, tafsiri za lugha (1 Wakorintho 12:8-10), pamoja na vipaji vya utumishi kama ufundishaji, serikali, rehema (Waroma 12:6-8). 'Kuna wingi wa vipaji, lakini Roho ni yeye yule yule.' (1 Wakorintho 12:4)"
  },
  
  {
    keywords: ["silaha za mungu", "mapigano ya kiroho", "ulinzi"],
    answer: "Silaha za Mungu zilizoelezwa katika Waefeso 6:10-18 zinajumuisha:\n- Mkanda wa kweli\n- Nguo yaji ya haki\n- Viatu vya amani ya Injili\n- Ngao ya imani\n- Kofia ya wokovu\n- Upanga wa Roho (Neno la Mungu)\n- Sala ya daima\n'Jivuni silaha zote za Mungu, ili mpweze kusimama imara dhidi ya hila za shetani.' (Waefeso 6:11)"
  },
  
  {
    keywords: ["dhabihu", "kupatanisha", "kupatanisha", "msalaba"],
    answer: "Dhabihu ya Yesu msalabani iko katikati ya ujumbe wa Kikristo. Yesu, Mwana wa Mungu asiye na dhambi, alijitoa kama dhabihu kwa dhambi za wanadamu, kusaidhi haki ya Mungu na kuruhusu upatanisho kati ya Mungu na wanadamu. 'Alichomwa kwa ajili ya dhambi zetu, akavunjika kwa ajili ya uovu wetu; adhabu ile iliyotupa amani ilimwangukia.' (Isaya 53:5) 'Kristo alituokoa kutoka laana ya sheria.' (Wagalatia 3:13)"
  },

  // --- Sala za Biblia ---
  {
    keywords: ["sala ya daudi", "zaburi 51", "tubu"],
    answer: "Zaburi 51 ni sala ya kutubu ya Daudi baada ya dhambi yake na Bethsabe: 'Ee Mungu! Unihurumie kwa wema wako; kwa rehema yako kubwa, futa maasi yangu; unisafishye kabisa na uovu wangu, unitakase na dhambi yangu.' (Zaburi 51:1-2) Sala hii ni mfano wa kutubu kweli na kuomba utakaso."
  },
  
  {
    keywords: ["sala ya sulaymani", "hekima", "akili"],
    answer: "Sala ya Sulaymani huko Gabaoni inaomba hekima badala ya utajiri au uhai mrefu: 'Basi umpe mtumishi wako moyo wenye hekima ili ahukumu watu wako, atambue mema na mabaya!' (1 Mambo ya Wafalme 3:9) Mungu alikuwa na furaha sana na ombi hili hata akampa hekima pia utajiri na uhai mrefu."
  },
  
  {
    keywords: ["sala ya yesu", "getsemani", "dhiki"],
    answer: "Sala ya Yesu bustanini Getsemani inaonyesha ubinadamu wake na kujisalimisha kwa mapenzi ya Mungu: 'Baba yangu, iwezekanavyo, acha kikombe hiki kinipite! Lakini si kama nataka mimi, bali kama wewe unataka.' (Mathayo 26:39) Sala hii inatufundisha kuwa waaminifu na Mungu wakati huo huo tukijisalimisha kwa mapenzi yake."
  },
  
  {
    keywords: ["sala ya paulo", "waefeso", "kumjua mungu"],
    answer: "Mtume Paulo aliomba ili waumini wamjue Mungu vizuri: 'Ninaomba ya kuwa Mungu wa Bwana wetu Yesu Kristo, Baba wa utukufu, awape roho ya hekima na funuo, katika ulimwengu wake; awang'ang'anie macho ya mioyo yenu, ili mjue ni tumaini gani unaambatana na mwito wake.' (Waefeso 1:17-18)"
  },

  // --- Ahadi za Mungu ---
  {
    keywords: ["ahadi", "mungu hayasemi", "uaminifu"],
    answer: "Mungu ni mwaminifu kwa ahadi zake: 'Mungu si mtuaye kuongoza, wala mwana wa mtuaye kujuta. Asemaye hatafanya? Alichotangaza hatautekeleza?' (Hesabu 23:19) 'Kwa maana ahadi zote za Mungu zimekuwa Ndiyo ndani yake.' (2 Wakorintho 1:20)"
  },
  
  {
    keywords: ["ahadi ya uwepo", "mungu yu nami", "nami"],
    answer: "Mungu anahadisha uwepo wake wa daima: 'Mimi ni nawe siku zote, hata mwisho wa dunia.' (Mathayo 28:20) 'Msiachane, kwa maana mimi si mtakuachaye.' (Yoshua 1:5) 'Ni mimi niko pamoja nawe kukukuokoa.' (Yeremia 1:8)"
  },
  
  {
    keywords: ["ahadi ya upatikanaji", "mungu atatengeneza", "mahitaji"],
    answer: "Mungu anahadisha kupatikana kwa mahitaji yetu: 'Mungu wangu atatengeneza mahitaji yenu yote kulingana na utajiri wake, kwa utukufu, katika Kristo Yesu.' (Wafilipi 4:19) 'Tafuteni kwanza ufalme wa Mungu na haki yake, na hayo yote yataongezeweni.' (Mathayo 6:33)"
  },
  
  {
    keywords: ["ahadi ya ulinzi", "mungu analinda", "usalama"],
    answer: "Mungu anahadisha ulinzi wake: 'Ambaye akaa chini ya kivuli cha Aliye Juu atapumzika katika kivuli cha Mwenye Nguvu Zote. Nawaambia Bwana: Nimbariki wangu na ngome yangu, Mungu wangu nimemtegemea!' (Zaburi 91:1-2) 'Jaribu lolote linalowakabili halijakuwa la kibinadamu; lakini Mungu ni mwaminifu, asiwacha mjaribiwe juu ya uwezo wenu.' (1 Wakorintho 10:13)"
  },
  
  {
    keywords: ["ahadi ya amani", "amani ya mungu", "utulivu"],
    answer: "Mungu anahadisha amani yake: 'Nawaachieni amani, nawaapaye amani yangu; siwapeni kama dunia inavyoipa. Mioyo yenu isije ikasikitika.' (Yohane 14:27) 'Amani ya Mungu, iliyo juu ya akili yote, itazinda mioyo yenu na mawazo yenu katika Kristo Yesu.' (Wafilipi 4:7)"
  },
  
  {
    keywords: ["ahadi ya uzima wa milele", "wokovu", "mbingu"],
    answer: "Mungu anahadisha uzima wa milele: 'Kwa maana Mungu aliupenda ulimwengu hivi, hata akamtoa Mwana wake pekee, ili kila amchaye mwewe asipotee, bali awe na uzima wa milele.' (Yohane 3:16) 'Ninakwenda kuwaandaa mahali.' (Yohane 14:2) 'Na Mungu atafuta machozi yote ya machozi yao, na kifo hakitakuwa tena.' (Ufunuo 21:4)"
  }
];
