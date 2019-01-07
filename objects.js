var playlist = { 
  'Ariana Grande': "thank u, next", 
  'The 1975': "Love It If We Made It", 
  'Tame Impala': "Love/Paranoia" }
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
  }