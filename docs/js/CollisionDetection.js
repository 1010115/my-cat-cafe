export function collisionDetection(player, gameCharacter) {
    return (player.left <= gameCharacter.right &&
        player.top <= gameCharacter.bottom &&
        gameCharacter.left <= player.right &&
        gameCharacter.top <= player.bottom);
}
//# sourceMappingURL=CollisionDetection.js.map