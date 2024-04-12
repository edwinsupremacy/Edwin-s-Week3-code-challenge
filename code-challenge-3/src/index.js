

function fetchMovieData() {
    return fetch("http://localhost:3000/films")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch movie data");
            }
            return response.json();
        });
}

function populateMovieDetails(movie) {
    const movietitle = document.getElementById("title");
    movietitle.textContent = movie.title;

    const runtime = document.getElementById("runtime");
    runtime.textContent = movie.runtime + " minutes";

    const desc = document.getElementById("film-info");
    desc.textContent = movie.description;

    const showtime = document.getElementById("showtime");
    showtime.textContent = movie.showtime;

    const im = document.getElementById("poster");
    im.src = movie.poster;

    const remainingTickets = document.getElementById("ticket-num");
    remainingTickets.textContent = movie.capacity - movie.tickets_sold;
}

function movieDetails() {
    const ul = document.getElementById("films");
    fetchMovieData()
        .then(data => {
            data.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie.title;
                li.style.cursor = "pointer";
                li.className = "film item";
                if (movie.tickets_sold === movie.capacity) {
                    li.classList.add("sold-out");
                }
                li.addEventListener("click", () => {
                    populateMovieDetails(movie);
                });
                ul.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
        });
}

movieDetails();


function ticketBuy(movieId) {
    fetch('http://localhost:3000/films')
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch movie data");
        }
        return response.json();
    })
    .then(movie => {
        if (movie.tickets_sold < movie.capacity) {
            const newTicketsSold = movie.tickets_sold + 1;
            fetch('http://localhost:3000/films', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ tickets_sold: newTicketsSold })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to update tickets sold");
                }
                return response.json();
            })
            .then(updatedMovie => {
                const li = document.querySelector(`li[data-id="${movieId}"]`);
                if (updatedMovie.tickets_sold === updatedMovie.capacity) {
                    li.classList.add("sold-out");
                }
            })
            .catch(error => console.error("Error:", error));
        } else {
            console.log("Sold out!");
        }
    })
    .catch(error => console.error("Error:", error));
}
ticketBuy()

function remainingTickets() {
    const remainder = document.querySelectorAll('.ticket-num');
    remainder.forEach(remainderItem => {
        const movieId = remainderItem.getAttribute('data-id');
        fetch('http://localhost:3000/films')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch movie data");
            }
            return response.json();
        })
        .then(movie => {
            remainderItem.textContent = movie.capacity - movie.tickets_sold;
        })
        .catch(error => console.error("Error:", error));
    });
}


// Function to delete movies
function deleteMovie(movieId) {
    fetch('http://localhost:3000/films'), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    
    }
    .then(response => {
        if (response.ok) {
            const listItem = document.querySelector(`li[data-id="${movieId}"]`);
            listItem.remove();
            console.log('Movie deleted successfully');
        } else {
            console.error('Failed to delete movie');
        }
    })
    .catch(error => console.error("Error:", error));
}
deleteMovie()
