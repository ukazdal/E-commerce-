
const TextClip = (text:string) => {
    if (text.length < 20) return text 
        return text.substring(0, 20) + "..."
}

export default TextClip