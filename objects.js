var playlist = { 
  'Ariana Grande': "thank u, next", 
  'The 1975': "Love It If We Made It", 
  'Tame Impala': "Love/Paranoia" }
function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
  }