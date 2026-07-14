import Image from "next/image";

const githubUsername = "Taiki-Takamatsu";

const GitHubProfileImage = () => {
  return (
    <Image
      src={"https://github.com/" + githubUsername + ".png"}
      // リンク先から画像を持ってくることも可能、next.config.tsで設定も可能
      alt="GitHub Profile"
      width={128}
      height={128}
      className="w-32 h-32 rounded-full border-2 border-gray-300 mx-auto mb-4"
    />
  );
};

export default GitHubProfileImage;
