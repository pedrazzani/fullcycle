const http = require('node:http');
const mysql = require('mysql');

const port = 3000;

const conf = {
    host: 'mysql_db',
    user: 'root', 
    password: 'root',
    database: 'nodedb'
};


const server = http.createServer((req, res) => {

	let result = '<h1>Full Cycle Rocks!!</h1>'
	+ '<h2>Lista de nomes cadastrada no banco de dados</h2>';

	const con = mysql.createConnection(conf);
	
	con.query('SELECT name FROM people', (err, rows) => {
		if (err) throw err

		result += '<ul>';

		rows.forEach(row => {
			result += '<li>';
			result += row.name;
			result += '</li>';
		});

		result += '</ul>';

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(result);

	});

	con.end();
});


server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});