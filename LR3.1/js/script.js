// Створення об'єктів пісень
let song1 = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 6, // хвилин
    isFavorite: false,
    markAsFavorite() {
      this.isFavorite = true;
    }
  };
  
  let song2 = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: 4,
    isFavorite: true,
    markAsFavorite() {
      this.isFavorite = true;
    }
  };
  
  let song3 = {
    title: "Hotel California",
    artist: "Eagles",
    duration: 6.5,
    isFavorite: false,
    markAsFavorite() {
      this.isFavorite = true;
    }
  };
  
  // Масив пісень
  let playlist = [song1, song2, song3];
  
  // Функція для відображення плейлиста на сторінці
  function displayPlaylist(songs) {
    let playlistDiv = document.getElementById('playlist');
    playlistDiv.innerHTML = ''; // Очищення перед додаванням нових пісень
    songs.forEach(song => {
      playlistDiv.innerHTML += `
        <p>Назва: ${song.title}, Виконавець: ${song.artist}, Тривалість: ${song.duration} хв., В обране: ${song.isFavorite ? "Так" : "Ні"}</p>
      `;
    });
  }
  
  // Виведення початкового плейлиста
  displayPlaylist(playlist);
  
  // Сортування за тривалістю і оновлення плейлиста
  playlist.sort((a, b) => a.duration - b.duration);
  displayPlaylist(playlist);
  
  // Приклад фільтрації пісень, які не в обраному
  let notFavoriteSongs = playlist.filter(song => !song.isFavorite);
  console.log("Пісні, не додані до обраного:", notFavoriteSongs);
  