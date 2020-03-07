package projections;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedArticle", types = User.class)
public interface EmbedArticle {

    Long getId();
    String getName();
    String getType();
    List<Article> getArticles();
}
