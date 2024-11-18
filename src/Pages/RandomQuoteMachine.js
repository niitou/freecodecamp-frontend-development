import React, { useEffect, useState } from 'react'

export default function RandomQuoteMachine() {
	const quotes = [
		{
			"q": "To be prepared is half the victory. ",
			"a": "Miguel de Cervantes",
			"c": "36",
			"h": "<blockquote>&ldquo;To be prepared is half the victory. &rdquo; &mdash; <footer>Miguel de Cervantes</footer></blockquote>"
		},
		{
			"q": "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
			"a": "Norman Vincent Peale",
			"c": "147",
			"h": "<blockquote>&ldquo;Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
		},
		{
			"q": "Better late than never.",
			"a": "Spencer Johnson",
			"c": "23",
			"h": "<blockquote>&ldquo;Better late than never.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
		},
		{
			"q": "There is nothing more frightful than ignorance in action.",
			"a": "Johann Wolfgang von Goethe",
			"c": "57",
			"h": "<blockquote>&ldquo;There is nothing more frightful than ignorance in action.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
		},
		{
			"q": "Leadership starts at the top.",
			"a": "Morgan Wootten",
			"c": "29",
			"h": "<blockquote>&ldquo;Leadership starts at the top.&rdquo; &mdash; <footer>Morgan Wootten</footer></blockquote>"
		},
		{
			"q": "I admire those who do good and expect nothing in return.",
			"a": "Roy T. Bennett",
			"c": "56",
			"h": "<blockquote>&ldquo;I admire those who do good and expect nothing in return.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
		},
		{
			"q": "Being in a good frame of mind helps keep one in the picture of health.",
			"a": "Unknown",
			"c": "70",
			"h": "<blockquote>&ldquo;Being in a good frame of mind helps keep one in the picture of health.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
		},
		{
			"q": "All religions, arts and sciences are branches of the same tree. ",
			"a": "Albert Einstein",
			"c": "64",
			"h": "<blockquote>&ldquo;All religions, arts and sciences are branches of the same tree. &rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"
		},
		{
			"q": "Ideas do not reach perfection in a day, no matter how much study is put upon them.",
			"a": "Alexander Graham Bell",
			"c": "82",
			"h": "<blockquote>&ldquo;Ideas do not reach perfection in a day, no matter how much study is put upon them.&rdquo; &mdash; <footer>Alexander Graham Bell</footer></blockquote>"
		},
		{
			"q": "Man should fear never beginning to live.",
			"a": "Marcus Aurelius",
			"c": "40",
			"h": "<blockquote>&ldquo;Man should fear never beginning to live.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
		},
		{
			"q": "Passion is energy. Feel the power that comes from focusing on what excites you. ",
			"a": "Oprah Winfrey",
			"c": "80",
			"h": "<blockquote>&ldquo;Passion is energy. Feel the power that comes from focusing on what excites you. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
		},
		{
			"q": "In order to carry a positive action, we must develop here a positive vision.",
			"a": "Dalai Lama",
			"c": "76",
			"h": "<blockquote>&ldquo;In order to carry a positive action, we must develop here a positive vision.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"
		},
		{
			"q": "Love is the expression of one's values.",
			"a": "Ayn Rand",
			"c": "39",
			"h": "<blockquote>&ldquo;Love is the expression of one's values.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
		},
		{
			"q": "Admire as much as you can. Most people do not admire enough.",
			"a": "Vincent van Gogh",
			"c": "60",
			"h": "<blockquote>&ldquo;Admire as much as you can. Most people do not admire enough.&rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>"
		},
		{
			"q": "Scared people want comfort and certainty so they avoid failure. People living fully seek challenges because this is where they feel alive.",
			"a": "Maxime Lagace",
			"c": "138",
			"h": "<blockquote>&ldquo;Scared people want comfort and certainty so they avoid failure. People living fully seek challenges because this is where they feel alive.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
		},
		{
			"q": "You're on earth. There's no cure for that.",
			"a": "Samuel Beckett",
			"c": "42",
			"h": "<blockquote>&ldquo;You're on earth. There's no cure for that.&rdquo; &mdash; <footer>Samuel Beckett</footer></blockquote>"
		},
		{
			"q": "Change happens when the pain of holding on becomes greater than the fear of letting go.",
			"a": "Spencer Johnson",
			"c": "87",
			"h": "<blockquote>&ldquo;Change happens when the pain of holding on becomes greater than the fear of letting go.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
		},
		{
			"q": "He will win who knows when to fight and when not to fight.",
			"a": "Sun Tzu",
			"c": "58",
			"h": "<blockquote>&ldquo;He will win who knows when to fight and when not to fight.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
		},
		{
			"q": "Life is one long process of getting tired.",
			"a": "Samuel Butler",
			"c": "42",
			"h": "<blockquote>&ldquo;Life is one long process of getting tired.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"
		},
		{
			"q": "You came empty handed, and you will leave empty handed.",
			"a": "Bhagavad Gita",
			"c": "55",
			"h": "<blockquote>&ldquo;You came empty handed, and you will leave empty handed.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
		},
		{
			"q": "A day without laughter is a day wasted.",
			"a": "Charlie Chaplin",
			"c": "39",
			"h": "<blockquote>&ldquo;A day without laughter is a day wasted.&rdquo; &mdash; <footer>Charlie Chaplin</footer></blockquote>"
		},
		{
			"q": "Whatever you think the world is withholding from you, you are withholding from the world.",
			"a": "Eckhart Tolle",
			"c": "89",
			"h": "<blockquote>&ldquo;Whatever you think the world is withholding from you, you are withholding from the world.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
		},
		{
			"q": "In order to control myself I must first accept myself by going with and not against my nature.",
			"a": "Bruce Lee",
			"c": "94",
			"h": "<blockquote>&ldquo;In order to control myself I must first accept myself by going with and not against my nature.&rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
		},
		{
			"q": "Be confident, not certain.",
			"a": "Eleanor Roosevelt",
			"c": "26",
			"h": "<blockquote>&ldquo;Be confident, not certain.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
		},
		{
			"q": "When we think about our strengths, we are strong. When we think about our weaknesses, we are weak.",
			"a": "Peter A. Cohen",
			"c": "98",
			"h": "<blockquote>&ldquo;When we think about our strengths, we are strong. When we think about our weaknesses, we are weak.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>"
		},
		{
			"q": "Don't live the same year 75 times and call it a life.",
			"a": "Robin Sharma",
			"c": "53",
			"h": "<blockquote>&ldquo;Don't live the same year 75 times and call it a life.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
		},
		{
			"q": "Darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.",
			"a": "J.R.R. Tolkien",
			"c": "96",
			"h": "<blockquote>&ldquo;Darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
		},
		{
			"q": "Many have died; you also will die. The drum of death is being beaten. The world has fallen in love with a dream. Only sayings of the wise will remain.",
			"a": "Kabir",
			"c": "150",
			"h": "<blockquote>&ldquo;Many have died; you also will die. The drum of death is being beaten. The world has fallen in love with a dream. Only sayings of the wise will remain.&rdquo; &mdash; <footer>Kabir</footer></blockquote>"
		},
		{
			"q": "Time you enjoy wasting, was not wasted.",
			"a": "John Lennon",
			"c": "39",
			"h": "<blockquote>&ldquo;Time you enjoy wasting, was not wasted.&rdquo; &mdash; <footer>John Lennon</footer></blockquote>"
		},
		{
			"q": "If you are far from the enemy, make him believe you are near.",
			"a": "Sun Tzu",
			"c": "61",
			"h": "<blockquote>&ldquo;If you are far from the enemy, make him believe you are near.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
		},
		{
			"q": "Don't let them drag you down by rumors. Just go with what you believe in.",
			"a": "Michael Jordan",
			"c": "73",
			"h": "<blockquote>&ldquo;Don't let them drag you down by rumors. Just go with what you believe in.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
		},
		{
			"q": "Do not look for approval except for the consciousness of doing your best.",
			"a": "Andrew Carnegie",
			"c": "73",
			"h": "<blockquote>&ldquo;Do not look for approval except for the consciousness of doing your best.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
		},
		{
			"q": "The only problem we really have is we think we're not supposed to have problems! Problems call us to higher level- - face & solve them now!",
			"a": "Tony Robbins",
			"c": "139",
			"h": "<blockquote>&ldquo;The only problem we really have is we think we're not supposed to have problems! Problems call us to higher level- - face & solve them now!&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
		},
		{
			"q": "Live simply, expect little, give much.",
			"a": "Norman Vincent Peale",
			"c": "38",
			"h": "<blockquote>&ldquo;Live simply, expect little, give much.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
		},
		{
			"q": "To create more positive results in your life, replace 'if only' with 'next time'.",
			"a": "Celestine Chua",
			"c": "81",
			"h": "<blockquote>&ldquo;To create more positive results in your life, replace 'if only' with 'next time'.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
		},
		{
			"q": "It doesn't matter if the glass is half empty or half full. Be grateful you have a glass - you're the only person that can decide what's in it.",
			"a": "Gurbaksh Chahal",
			"c": "142",
			"h": "<blockquote>&ldquo;It doesn't matter if the glass is half empty or half full. Be grateful you have a glass - you're the only person that can decide what's in it.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>"
		},
		{
			"q": "Life isn't about finding yourself. Life is about creating yourself.",
			"a": "George Bernard Shaw",
			"c": "67",
			"h": "<blockquote>&ldquo;Life isn't about finding yourself. Life is about creating yourself.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
		},
		{
			"q": "If I persist long enough I will win.",
			"a": "Og Mandino",
			"c": "36",
			"h": "<blockquote>&ldquo;If I persist long enough I will win.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
		},
		{
			"q": "If you aren't sure which way to do something, do it both ways and see which works better.",
			"a": "John Carmack",
			"c": "89",
			"h": "<blockquote>&ldquo;If you aren't sure which way to do something, do it both ways and see which works better.&rdquo; &mdash; <footer>John Carmack</footer></blockquote>"
		},
		{
			"q": "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
			"a": "George Bernard Shaw",
			"c": "102",
			"h": "<blockquote>&ldquo;Progress is impossible without change, and those who cannot change their minds cannot change anything.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
		},
		{
			"q": "Each day provides it's own gifts.",
			"a": "Marcus Aurelius",
			"c": "33",
			"h": "<blockquote>&ldquo;Each day provides it's own gifts.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
		},
		{
			"q": "Arise, slay thy enemies, enjoy a prosperous kingdom.",
			"a": "Bhagavad Gita",
			"c": "52",
			"h": "<blockquote>&ldquo;Arise, slay thy enemies, enjoy a prosperous kingdom.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
		},
		{
			"q": "When your intuition is strong, follow it.",
			"a": "Lolly Daskal",
			"c": "41",
			"h": "<blockquote>&ldquo;When your intuition is strong, follow it.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
		},
		{
			"q": "What the caterpillar calls the end of the world, the master calls a butterfly.",
			"a": "Richard Bach",
			"c": "78",
			"h": "<blockquote>&ldquo;What the caterpillar calls the end of the world, the master calls a butterfly.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
		},
		{
			"q": "Older men declare war. But it is youth that must fight and die.",
			"a": "Herbert Hoover",
			"c": "63",
			"h": "<blockquote>&ldquo;Older men declare war. But it is youth that must fight and die.&rdquo; &mdash; <footer>Herbert Hoover</footer></blockquote>"
		},
		{
			"q": "I can think of nothing less pleasurable than a life devoted to pleasure.",
			"a": "John D. Rockefeller",
			"c": "72",
			"h": "<blockquote>&ldquo;I can think of nothing less pleasurable than a life devoted to pleasure.&rdquo; &mdash; <footer>John D. Rockefeller</footer></blockquote>"
		},
		{
			"q": "The river that flows in you also flows in me.",
			"a": "Kabir",
			"c": "45",
			"h": "<blockquote>&ldquo;The river that flows in you also flows in me.&rdquo; &mdash; <footer>Kabir</footer></blockquote>"
		},
		{
			"q": "Peace is not the absence of conflict, but the ability to cope with it.",
			"a": "Unknown",
			"c": "70",
			"h": "<blockquote>&ldquo;Peace is not the absence of conflict, but the ability to cope with it.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
		},
		{
			"q": "The few who do are the envy of the many who only watch.",
			"a": "Jim Rohn",
			"c": "55",
			"h": "<blockquote>&ldquo;The few who do are the envy of the many who only watch.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
		},
		{
			"q": "What do we live for, if it is not to make life less difficult for each other?",
			"a": "George Eliot",
			"c": "77",
			"h": "<blockquote>&ldquo;What do we live for, if it is not to make life less difficult for each other?&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"
		}
	]
	const [quote, setQuote] = useState("")
	const [author, setAuthor] = useState("")
	const [randomNumber, setRandomNumber] = useState("")

	const getRandomNumber = (max) => {
		return Math.floor(Math.random() * max)
	}

	const getNewQuote = () => {
		setRandomNumber(getRandomNumber(50))
		setQuote(quotes.at(randomNumber)['q'])
		setAuthor(quotes.at(randomNumber)['a'])
	}

	useEffect(() => {
		getNewQuote()
	}, [])

	return (
		<div className="container d-flex align-items-center justify-content-center h100">
			<div className="container-fluid" id='quote-box'>
				<h1 id='text'>{quote}</h1>
				<h2 id='author'>{author}</h2>

				<a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id='tweet-quote' className='btn btn-default'>Tweet</a>
				<button className='btn btn-primary' id='new-quote' onClick={getNewQuote}>New Quote</button>
			</div>
		</div>
	)
}
