
const TextClip = (text:string) => {
    if (text.length < 20) return text 
        return text.substring(0, 10) + "..."
}

export default TextClip