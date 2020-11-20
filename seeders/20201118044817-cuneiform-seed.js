'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});
    
    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'brock.wc@cuneiform.net',
        username: 'zap_rowsdower',
        name: 'Brock WC',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'james.s@cuneiform.net',
        username: 'pythagoras',
        name: 'James S',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'michael.p@cuneiform.net',
        username: 'Doctor5',
        name: 'michael.p',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'jacob.k@cuneiform.net',
        username: 'jacobpastorious',
        name: 'Jacob K',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'uyen.l@cuneiform.net',
        username: 'raspberrypup',
        name: 'Uyen L',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'seanny@cuneiform.net',
        username: 'drakonphoenix',
        name: 'Seanny P',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'david.s@cuneiform.net',
        username: 'bubbles',
        name: 'David S',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'mac.j@cuneiform.net',
        username: 'macattack',
        name: 'Mac J',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'sarah.k@cuneiform.net',
        username: 'theking',
        name: 'Sarah K',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'amber.a@cuneiform.net',
        username: 'sunshine',
        name: 'Amber A',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'johncoltrane@cuneiform.net',
        username: 'giantsteps',
        name: 'John Coltrane',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'tpain@cuneiform.net',
        username: 'tpain',
        name: 'TPain',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'bustarhymes@cuneiform.net',
        username: 'ReptarWagon',
        name: 'Busta Rhymes',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'mingus@cuneiform.net',
        username: 'thebestbassist',
        name: 'Charles Mingus',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'nujabes@cuneiform.net',
        username: 'ripnujabes',
        name: 'Nujabes',
        password: bcrypt.hashSync('cuneitest', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {returning: true});
    console.log('bulk insert:', bulkUsers);

    await queryInterface.bulkDelete('prompts', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkPrompts = await queryInterface.bulkInsert('prompts', [
      {
        body: 'Who do you aspire to be? Create a character. Describe their lifestyle.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Map out your ideal day. What would it take to make this a reality?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'What was the last dream you had that you vividly remember? How does this dream relate to your conscious life?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: `Finish the story:
        I’ve lived in  _______  since I was born. It’s everything that I know, which is why I’ve been so frightened the past few weeks. I’m moving to _____ …
        `,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'What are you willing to risk to achieve your dreams?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Write about a childhood friend. Where are they now?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Write a continuation of your favorite novel, from the viewpoint of a secondary or tertiary character.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Two people of completely different backgrounds meet by accident.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Make friends with a difficult person.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Will religion hold the same strength in 100 years? Why? Why not?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Your neighbor leads a double life.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'The fountain of youth...',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'You are the therapist of your favorite fairy tale character.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'While shopping at a secondhand clothing store, you find a beautiful, old ring. Delighted with your find, you rush to buy it. Three days later, you receive an email from an unknown sender.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'What are you grateful for today?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Who do you confide in most? Why?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Write about a ship, or any other vehicle, that can take you to any other place other than where you are now.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'The future is wonderful, why?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'You have discovered the most wondrous invention, what does it do? How does it change the world?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'What was the last thing, or person, that made you smile?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Write a letter to your 14 year old self.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'Turn the last song you listened to into a story.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'You have been traveling through space, and finally, you discover a new planet, describe what you see.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'You wake up as your favorite animal, what is your day like? What do you do?',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'We need to clean up, the police will be here any minute.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'You have the most fabulous partner, but they harbor a dark secret.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'What is your perfect day? Tell us everything about it.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        body: 'The road was long and hard, and the journey difficult…',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], { returning: true});
    console.log('prompts: ', bulkPrompts);

    await queryInterface.bulkDelete('entries', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkEntries = await queryInterface.bulkInsert('entries', [
      {
        userId: bulkUsers[0].id,
        promptId: bulkPrompts[0].id,
        quote: '',
        title: 'Lorem ipsum dolor sit amet',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[0].id,
        promptId: bulkPrompts[0].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        promptId: bulkPrompts[20].id,
        quote: '',
        title: 'Consectetur adipiscing elit',
        body: `"This is a very unexpected turn of affairs," said I; "and what then?"

        "Well, I found my plans very seriously menaced. It looked as if the pair might take an immediate departure, and so necessitate very prompt and energetic measures on my part. At the church door, however, they separated, he driving back to the Temple, and she to her own house. 'I shall drive out in the park at five as usual,' she said as she left him. I heard no more. They drove away in different directions, and I went off to make my own arrangements."`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        promptId: bulkPrompts[15].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        promptId: bulkPrompts[2].id,
        quote: '',
        title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        body: `Time ran on; thousands of pounds were offered in reward, for the death of Sir Danvers was resented as a public injury; but Mr. Hyde had disappeared out of the ken of the police as though he had never existed. Much of his past was unearthed, indeed, and all disreputable: tales came out of the man’s cruelty, at once so callous and violent; of his vile life, of his strange associates, of the hatred that seemed to have surrounded his career; but of his present whereabouts, not a whisper. From the time he had left the house in Soho on the morning of the murder, he was simply blotted out; and gradually, as time drew on, Mr. Utterson began to recover from the hotness of his alarm, and to grow more at quiet with himself. The death of Sir Danvers was, to his way of thinking, more than paid for by the disappearance of Mr. Hyde. Now that that evil influence had been withdrawn, a new life began for Dr. Jekyll. He came out of his seclusion, renewed relations with his friends, became once more their familiar guest and entertainer; and whilst he had always been known for charities, he was now no less distinguished for religion. He was busy, he was much in the open air, he did good; his face seemed to open and brighten, as if with an inward consciousness of service; and for more than two months, the doctor was at peace.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        promptId: bulkPrompts[11].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        promptId: bulkPrompts[3].id,
        quote: '',
        title: 'Duis ut diam quam nulla porttitor',
        body: `On the 8th of January Utterson had dined at the doctor’s with a small party; Lanyon had been there; and the face of the host had looked from one to the other as in the old days when the trio were inseparable friends. On the 12th, and again on the 14th, the door was shut against the lawyer. “The doctor was confined to the house,” Poole said, “and saw no one.” On the 15th, he tried again, and was again refused; and having now been used for the last two months to see his friend almost daily, he found this return of solitude to weigh upon his spirits. The fifth night he had in Guest to dine with him; and the sixth he betook himself to Dr. Lanyon’s.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        promptId: bulkPrompts[1].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[4].id,
        promptId: bulkPrompts[4].id,
        quote: '',
        title: 'Massa id neque',
        body: `There at least he was not denied admittance; but when he came in, he was shocked at the change which had taken place in the doctor’s appearance. He had his death-warrant written legibly upon his face. The rosy man had grown pale; his flesh had fallen away; he was visibly balder and older; and yet it was not so much these tokens of a swift physical decay that arrested the lawyer’s notice, as a look in the eye and quality of manner that seemed to testify to some deep-seated terror of the mind. It was unlikely that the doctor should fear death; and yet that was what Utterson was tempted to suspect. “Yes,” he thought; “he is a doctor, he must know his own state and that his days are counted; and the knowledge is more than he can bear.” And yet when Utterson remarked on his ill-looks, it was with an air of great firmness that Lanyon declared himself a doomed man.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[4].id,
        promptId: bulkPrompts[12].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[5].id,
        promptId: bulkPrompts[5].id,
        quote: '',
        title: 'Aliquam id diam',
        body:`“I have had a shock,” he said, “and I shall never recover. It is a question of weeks. Well, life has been pleasant; I liked it; yes, sir, I used to like it. I sometimes think if we knew all, we should be more glad to get away.”

        “Jekyll is ill, too,” observed Utterson. “Have you seen him?”
        
        But Lanyon’s face changed, and he held up a trembling hand. “I wish to see or hear no more of Dr. Jekyll,” he said in a loud, unsteady voice. “I am quite done with that person; and I beg that you will spare me any allusion to one whom I regard as dead.”
        
        “Tut-tut,” said Mr. Utterson; and then after a considerable pause, “Can’t I do anything?” he inquired. “We are three very old friends, Lanyon; we shall not live to make others.”
        
        “Nothing can be done,” returned Lanyon; “ask himself.”
        
        “He will not see me,” said the lawyer.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[5].id,
        promptId: bulkPrompts[0].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[6].id,
        promptId: bulkPrompts[6].id,
        quote: '',
        title: 'Maecenas ultricies mi eget',
        body:`"We know the worst now," he said. "He is here, and we know his purpose. It may not be too late. Let us be armed--the same as we were the other night, but lose no time; there is not an instant to spare." There was no need to put our fear, nay our conviction, into words--we shared them in common. We all hurried and took from our rooms the same things that we had when we entered the Count's house. The Professor had his ready, and as we met in the corridor he pointed to them significantly as he said:--

        "They never leave me; and they shall not till this unhappy business is over. Be wise also, my friends. It is no common enemy that we deal with. Alas! alas! that that dear Madam Mina should suffer!" He stopped; his voice was breaking, and I do not know if rage or terror predominated in my own heart.
        
        Outside the Harkers' door we paused. Art and Quincey held back, and the latter said:--
        
        "Should we disturb her?"
        
        "We must," said Van Helsing grimly. "If the door be locked, I shall break it in."
        
        "May it not frighten her terribly? It is unusual to break into a lady's room!"
        
        Van Helsing said solemnly, "You are always right; but this is life and death. All chambers are alike to the doctor; and even were they not they are all as one to me to-night. Friend John, when I turn the handle, if the door does not open, do you put your shoulder down and shove; and you too, my friends. Now!"`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[6].id,
        promptId: bulkPrompts[10].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[7].id,
        promptId: bulkPrompts[7].id,
        quote: '',
        title: 'Neque convallis a cras semper',
        body: `I have just had my hair dressed. You can't think how oddly my head feels; full of powder and black pins, and a great cushion on the top of it. I believe you would hardly know me, for my face looks quite different to what it did before my hair was dressed. When I shall be able to make use of a comb for myself I cannot tell; for my hair is so much entangled, frizzled they call it, that I fear it will be very difficult.

        I am half afraid of this ball to-night; for, you know, I have never danced but at school: however, Miss Mirvan says there is nothing in it. Yet, I wish it was over.
        
        Adieu, my dear Sir, pray excuse the wretched stuff I write; perhaps I may improve by being in this town, and then my letters will be less unworthy your reading. Meantime, I am, Your dutiful and affectionate, though unpolished, EVELINA.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[7].id,
        promptId: bulkPrompts[3].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[8].id,
        promptId: bulkPrompts[8].id,
        quote: '',
        title: 'Auctor neque vitae tempus',
        body: `I wished to have staid at Birmingham to-night, to have talked more with Mr. Hector; but my friend was impatient to reach his native city; so we drove on that stage in the dark, and were long pensive and silent. When we came within the focus of the Lichfield lamps, 'Now (said he,) we are getting out of a state of death.' We put up at the Three Crowns, not one of the great inns, but a good old fashioned one, which was kept by Mr. Wilkins, and was the very next house to that in which Johnson was born and brought up, and which was still his own property. We had a comfortable supper, and got into high spirits. I felt all my Toryism glow in this old capital of Staffordshire. I could have offered incense genio loci; and I indulged in libations of that ale, which Boniface, in The Beaux Stratagem, recommends with such an eloquent jollity.

        Next morning he introduced me to Mrs. Lucy Porter, his step-daughter. She was now an old maid, with much simplicity of manner. She had never been in London. Her brother, a Captain in the navy, had left her a fortune of ten thousand pounds; about a third of which she had laid out in building a stately house, and making a handsome garden, in an elevated situation in Lichfield. Johnson, when here by himself, used to live at her house. She reverenced him, and he had a parental tenderness for her.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        userId: bulkUsers[9].id,
        promptId: bulkPrompts[11].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[9].id,
        promptId: bulkPrompts[9].id,
        quote: '',
        title: 'Quam nulla porttitor massa id',
        body: `As the dawn was just breaking, he found himself close to Covent Garden. The darkness lifted, and, flushed with faint fires, the sky hollowed itself into a perfect pearl. Huge carts filled with nodding lilies rumbled slowly down the polished empty street. The air was heavy with the perfume of the flowers, and their beauty seemed to bring him an anodyne for his pain. He followed into the market and watched the men unloading their waggons. A white-smocked carter offered him some cherries. He thanked him, wondered why he refused to accept any money for them, and began to eat them listlessly. They had been plucked at midnight, and the coldness of the moon had entered into them. A long line of boys carrying crates of striped tulips, and of yellow and red roses, defiled in front of him, threading their way through the huge, jade-green piles of vegetables. Under the portico, with its grey, sun-bleached pillars, loitered a troop of draggled bareheaded girls, waiting for the auction to be over. Others crowded round the swinging doors of the coffee-house in the piazza. The heavy cart-horses slipped and stamped upon the rough stones, shaking their bells and trappings. Some of the drivers were lying asleep on a pile of sacks. Iris-necked and pink-footed, the pigeons ran about picking up seeds.

        After a little while, he hailed a hansom and drove home. For a few moments he loitered upon the doorstep, looking round at the silent square, with its blank, close-shuttered windows and its staring blinds. The sky was pure opal now, and the roofs of the houses glistened like silver against it. From some chimney opposite a thin wreath of smoke was rising. It curled, a violet riband, through the nacre-coloured air.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[10].id,
        promptId: bulkPrompts[22].id,
        quote: '',
        title: 'Turpis egestas maecenas',
        body: `He turned round and, walking to the window, drew up the blind. The bright dawn flooded the room and swept the fantastic shadows into dusky corners, where they lay shuddering. But the strange expression that he had noticed in the face of the portrait seemed to linger there, to be more intensified even. The quivering ardent sunlight showed him the lines of cruelty round the mouth as clearly as if he had been looking into a mirror after he had done some dreadful thing.

        He winced and, taking up from the table an oval glass framed in ivory Cupids, one of Lord Henry's many presents to him, glanced hurriedly into its polished depths. No line like that warped his red lips. What did it mean?
        
        He rubbed his eyes, and came close to the picture, and examined it again. There were no signs of any change when he looked into the actual painting, and yet there was no doubt that the whole expression had altered. It was not a mere fancy of his own. The thing was horribly apparent.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[10].id,
        promptId: bulkPrompts[0].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[11].id,
        promptId: bulkPrompts[18].id,
        quote: '',
        title: 'Sed id semper risus in hendrerit gravida rutrum',
        body: `“This, madam, is a faithful narrative of every event in which we have been concerned together; and if you do not absolutely reject it as false, you will, I hope, acquit me henceforth of cruelty towards Mr. Wickham. I know not in what manner, under what form of falsehood he had imposed on you; but his success is not perhaps to be wondered at. Ignorant as you previously were of everything concerning either, detection could not be in your power, and suspicion certainly not in your inclination.

        “You may possibly wonder why all this was not told you last night; but I was not then master enough of myself to know what could or ought to be revealed. For the truth of everything here related, I can appeal more particularly to the testimony of Colonel Fitzwilliam, who, from our near relationship and constant intimacy, and, still more, as one of the executors of my father’s will, has been unavoidably acquainted with every particular of these transactions. If your abhorrence of me should make my assertions valueless, you cannot be prevented by the same cause from confiding in my cousin; and that there may be the possibility of consulting him, I shall endeavour to find some opportunity of putting this letter in your hands in the course of the morning. I will only add, God bless you.
        
        “FITZWILLIAM DARCY”`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[11].id,
        promptId: bulkPrompts[12].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[12].id,
        promptId: bulkPrompts[13].id,
        quote: '',
        title: 'Congue nisi vitae suscipit tellus mauris a diam',
        body: `"Pray continue," said Holmes. "Your narrative promises to be a most interesting one."

        "You will find it rather disconnected, I fear, and there may prove to be little relation between the different incidents of which I speak. On the very first day that I was at the Copper Beeches, Mr. Rucastle took me to a small outhouse which stands near the kitchen door. As we approached it I heard the sharp rattling of a chain, and the sound as of a large animal moving about.
        
        "'Look in here!' said Mr. Rucastle, showing me a slit between two planks. 'Is he not a beauty?'
        
        "I looked through and was conscious of two glowing eyes, and of a vague figure huddled up in the darkness.
        
        "'Don't be frightened,' said my employer, laughing at the start which I had given. 'It's only Carlo, my mastiff. I call him mine, but really old Toller, my groom, is the only man who can do anything with him. We feed him once a day, and not too much then, so that he is always as keen as mustard. Toller lets him loose every night, and God help the trespasser whom he lays his fangs upon. For goodness' sake don't you ever on any pretext set your foot over the threshold at night, for it's as much as your life is worth.'`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[12].id,
        promptId: bulkPrompts[13].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[13].id,
        promptId: bulkPrompts[20].id,
        quote: '',
        title: 'Quisque non tellus orci ac auctor',
        body: `From the very beginning--from the first moment, I may almost say--of my acquaintance with you, your manners, impressing me with the fullest belief of your arrogance, your conceit, and your selfish disdain of the feelings of others, were such as to form the groundwork of disapprobation on which succeeding events have built so immovable a dislike; and I had not known you a month before I felt that you were the last man in the world whom I could ever be prevailed on to marry.”

        “You have said quite enough, madam. I perfectly comprehend your feelings, and have now only to be ashamed of what my own have been. Forgive me for having taken up so much of your time, and accept my best wishes for your health and happiness.”
        
        And with these words he hastily left the room, and Elizabeth heard him the next moment open the front door and quit the house.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[13].id,
        promptId: bulkPrompts[20].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[14].id,
        promptId: bulkPrompts[15].id,
        quote: '',
        title: 'Amet nisl suscipit adipiscing bibendum ',
        body: `"How dare you touch him, any of you? How dare you cast eyes on him when I had forbidden it? Back, I tell you all! This man belongs to me! Beware how you meddle with him, or you'll have to deal with me." The fair girl, with a laugh of ribald coquetry, turned to answer him:--

        "You yourself never loved; you never love!" On this the other women joined, and such a mirthless, hard, soulless laughter rang through the room that it almost made me faint to hear; it seemed like the pleasure of fiends. Then the Count turned, after looking at my face attentively, and said in a soft whisper:--
        
        "Yes, I too can love; you yourselves can tell it from the past. Is it not so? Well, now I promise you that when I am done with him you shall kiss him at your will. Now go! go! I must awaken him, for there is work to be done."
        
        "Are we to have nothing to-night?" said one of them, with a low laugh, as she pointed to the bag which he had thrown upon the floor, and which moved as though there were some living thing within it. For answer he nodded his head. One of the women jumped forward and opened it. If my ears did not deceive me there was a gasp and a low wail, as of a half-smothered child. The women closed round, whilst I was aghast with horror; but as I looked they disappeared, and with them the dreadful bag. There was no door near them, and they could not have passed me without my noticing. They simply seemed to fade into the rays of the moonlight and pass out through the window, for I could see outside the dim, shadowy forms for a moment before they entirely faded away.
        
        Then the horror overcame me, and I sank down unconscious.`,
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[14].id,
        promptId: bulkPrompts[14].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[15].id,
        promptId: bulkPrompts[22].id,
        quote: '',
        title: 'This is a public entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[15].id,
        promptId: bulkPrompts[22].id,
        quote: '',
        title: 'This is a private entry',
        body: 'I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch-chain in memory of the occasion.',
        isPublic: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {returning: true});
    console.log(bulkEntries)

  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
